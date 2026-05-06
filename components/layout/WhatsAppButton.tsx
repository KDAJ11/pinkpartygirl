"use client";

import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/2348000000000?text=Hi%20Pinkpartygirl!%20I%27d%20like%20to%20plan%20something%20special"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-4 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow duration-200 cursor-pointer"
      style={{ background: "#25D366" }}
    >
      {/* WhatsApp SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="white"
        width="28"
        height="28"
        aria-hidden="true"
      >
        <path d="M16.003 3C9.376 3 4 8.373 4 15.001c0 2.183.588 4.23 1.61 5.995L4 29l8.212-1.589A11.94 11.94 0 0 0 16.003 28C22.628 28 28 22.625 28 15.999 28 9.373 22.628 3 16.003 3zm0 21.9c-1.9 0-3.73-.512-5.306-1.473l-.38-.226-3.936.76.8-3.822-.248-.39A9.879 9.879 0 0 1 5.9 15c0-5.563 4.535-10.09 10.101-10.09 5.565 0 10.099 4.527 10.099 10.09C26.1 20.37 21.568 24.9 16.003 24.9zm5.55-7.574c-.304-.153-1.798-.887-2.077-.988-.279-.102-.481-.153-.684.153-.203.305-.783.987-.96 1.19-.177.203-.354.228-.657.076-.304-.153-1.28-.472-2.438-1.503-.9-.803-1.509-1.795-1.685-2.1-.177-.304-.019-.469.133-.62.136-.136.304-.355.456-.532.153-.178.203-.305.304-.508.102-.203.051-.382-.025-.533-.076-.153-.684-1.647-.937-2.254-.247-.592-.498-.512-.684-.521l-.583-.011c-.203 0-.533.076-.812.38-.279.305-1.062 1.037-1.062 2.53 0 1.495 1.087 2.938 1.24 3.14.152.203 2.14 3.268 5.185 4.581.724.314 1.29.502 1.73.641.727.23 1.39.198 1.913.12.584-.088 1.798-.734 2.052-1.444.253-.709.253-1.318.177-1.444-.076-.127-.279-.204-.583-.356z" />
      </svg>

      {/* Pulse ring — every 3s */}
      <span
        className="wa-pulse absolute inset-0 rounded-full pointer-events-none"
        style={{ background: "#25D366" }}
        aria-hidden="true"
      />
    </motion.a>
  );
}
