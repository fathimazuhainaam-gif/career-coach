"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Save, RotateCcw, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCoverLetter, updateCoverLetter } from "@/actions/cover-letter";
import CoverLetterPreview from "../_components/cover-letter-preview";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function EditCoverLetterPage({ params }) {
  const router = useRouter()
  const [coverLetter, setCoverLetter] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [hasChanges, setHasChanges] = useState(false);

  useEffect(() => {
    const loadCoverLetter = async () => {
      try {
        const id = (await params).id;
        const letter = await getCoverLetter(id);
        setCoverLetter(letter);
        setEditedContent(letter?.content || "");
        setIsLoading(false);
      } catch (error) {
        toast.error("Failed to load cover letter");
        setIsLoading(false);
      }
    };

    loadCoverLetter();
  }, [params]);

  const handleContentChange = (newContent) => {
    setEditedContent(newContent);
    setHasChanges(newContent !== coverLetter?.content);
  };

  const handleSave = async () => {
    if (!coverLetter?.id) return;

    setIsSaving(true);
    try {
      await updateCoverLetter(coverLetter.id, {
        content: editedContent,
      });
      
      setCoverLetter({
        ...coverLetter,
        content: editedContent,
      });
      setHasChanges(false);
      toast.success("Cover letter updated successfully!");
    } catch (error) {
      toast.error(error.message || "Failed to update cover letter");
    } finally {
      setIsSaving(false);
    }
  };

  const handleCancel = () => {
    router.push('/ai-cover-letter')
  };

  if (isLoading) {
    return (
      <div className="container mx-auto py-6">
        <div className="flex items-center justify-center h-96">
          <Loader2 className="h-8 w-8 animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-6">
      <div className="flex flex-col space-y-2">
        <Link href="/ai-cover-letter">
          <Button variant="link" className="gap-2 pl-0">
            <ArrowLeft className="h-4 w-4" />
            Back to Cover Letters
          </Button>
        </Link>

        <h1 className="text-6xl font-bold gradient-title mb-6">
          {coverLetter?.jobTitle} at {coverLetter?.companyName}
        </h1>

        <div className="flex gap-2 mb-4">
          <Button
            onClick={handleSave}
            disabled={!hasChanges || isSaving}
            className="gap-2"
          >
            {isSaving ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                Save Changes
              </>
            )}
          </Button>
          <Button
            onClick={handleCancel}
            variant="outline"
            disabled={!hasChanges || isSaving}
            className="gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Go back
          </Button>
        </div>
      </div>

      <CoverLetterPreview 
        content={editedContent} 
        onContentChange={handleContentChange}
      />
    </div>
  );
}
