"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  console.log("Modal isOpen:", isOpen); // добавь это
  return (
    <div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={onClose} />
          <div className="relative bg-white rounded-2xl p-6 z-10 w-full max-w-md mx-4">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};
