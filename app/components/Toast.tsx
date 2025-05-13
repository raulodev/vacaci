import React, { useState, useEffect } from "react";

export const Toast = ({
  message,
  show,
  onClose,
}: {
  message: string;
  show: boolean;
  onClose: () => void;
}) => {
  const [visible, setVisible] = useState<boolean>(show);

  useEffect(() => {
    if (show) {
      setVisible(true);
      onClose();
    }
  }, [show]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => {
        setVisible(false);
        show = false;
      }, 3000);
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div className="absolute bottom-5 left-5 p-4 rounded-lg bg-orange-600 text-white shadow-lg">
      {message}
    </div>
  );
};
