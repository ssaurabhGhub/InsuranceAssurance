import UploadForm from "../UploadForm";

export default function UploadFormExample() {
  return (
    <UploadForm
      onNext={() => console.log("Next clicked")}
      onBack={() => console.log("Back clicked")}
    />
  );
}
