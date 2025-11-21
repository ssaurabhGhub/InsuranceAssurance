import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { Upload, File, X, FileText } from "lucide-react";

interface UploadFormProps {
  onNext: () => void;
  onBack: () => void;
}

interface UploadedFile {
  id: string;
  name: string;
  size: number;
}

export default function UploadForm({ onNext, onBack }: UploadFormProps) {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [dragActive, setDragActive] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files).map((file) => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: file.size,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
      console.log("Files uploaded:", newFiles);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files) {
      const newFiles = Array.from(e.dataTransfer.files).map((file) => ({
        id: Math.random().toString(36).substring(7),
        name: file.name,
        size: file.size,
      }));
      setFiles((prev) => [...prev, ...newFiles]);
      console.log("Files dropped:", newFiles);
    }
  };

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id));
    console.log("File removed:", id);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return Math.round(bytes / Math.pow(k, i) * 100) / 100 + " " + sizes[i];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Upload stage completed with files:", files);
    onNext();
  };

  return (
    <div className="max-w-3xl mx-auto px-4 md:px-6 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-foreground mb-2" data-testid="text-stage-title">
          Upload Insurance Documents
        </h2>
        <p className="text-sm text-muted-foreground" data-testid="text-stage-description">
          Upload your existing insurance policies and documents for analysis. Supported formats: PDF, DOC, DOCX, JPG, PNG
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div
          className={`relative border-2 border-dashed rounded-md p-8 md:p-12 transition-colors ${
            dragActive ? "border-primary bg-primary/5" : "border-border"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          data-testid="dropzone-upload"
        >
          <div className="flex flex-col items-center text-center">
            <Upload className="w-12 h-12 text-muted-foreground mb-4" data-testid="icon-upload" />
            <h3 className="text-lg font-medium text-foreground mb-2">
              Drag and drop your files here
            </h3>
            <p className="text-sm text-muted-foreground mb-4">or</p>
            <Label htmlFor="file-upload">
              <Button type="button" variant="outline" asChild data-testid="button-browse">
                <span className="cursor-pointer">Browse Files</span>
              </Button>
            </Label>
            <Input
              id="file-upload"
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              data-testid="input-file"
            />
          </div>
        </div>

        {files.length > 0 && (
          <div className="space-y-3">
            <Label className="text-base">Uploaded Files ({files.length})</Label>
            <div className="space-y-2">
              {files.map((file) => (
                <Card key={file.id} className="p-4" data-testid={`card-file-${file.id}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <FileText className="w-5 h-5 text-primary flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground truncate" data-testid={`text-filename-${file.id}`}>
                          {file.name}
                        </p>
                        <p className="text-xs text-muted-foreground" data-testid={`text-filesize-${file.id}`}>
                          {formatFileSize(file.size)}
                        </p>
                      </div>
                    </div>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeFile(file.id)}
                      data-testid={`button-remove-${file.id}`}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        <div className="flex justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={onBack}
            data-testid="button-back"
          >
            Back
          </Button>
          <Button type="submit" data-testid="button-continue">
            Continue to Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
