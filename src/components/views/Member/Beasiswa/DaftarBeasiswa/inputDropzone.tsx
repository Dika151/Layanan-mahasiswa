import { Input } from "@nextui-org/react";
import { useDropzone, DropzoneOptions } from "react-dropzone";
import { FiUploadCloud } from "react-icons/fi";
import { useState, useCallback } from "react";

interface Props {
  onChange: (file: File | null) => void;
  errorMessage?: string;
  label?: string;
}

const InputDropzone = ({ onChange, errorMessage, label }: Props) => {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0] ?? null;
    if (file) {
      setFileName(file.name);
      onChange(file);
    } else {
      setFileName("");
      onChange(null);
    }
  }, [onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    onDrop,
  } as DropzoneOptions);

  return (
    <div
      {...getRootProps()}
      className={`
        border-2 rounded-xl p-1 transition cursor-pointer
        ${isDragActive ? "border-blue-500 bg-blue-50" : "border-default-200"}
      `}
    >
      <Input
        readOnly
        variant="bordered"
        placeholder={
          fileName
            ? fileName
            : isDragActive
            ? "Lepaskan file di sini..."
            : label ?? "Upload file"
        }
        endContent={<FiUploadCloud size={20} />}
        isInvalid={!!errorMessage}
        errorMessage={errorMessage}
      />

      {/* hidden dropzone input */}
      <input {...getInputProps()} />
    </div>
  );
};

export default InputDropzone;