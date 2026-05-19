import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
    images: string[];
    currentIndex: number;
    onClose: () => void;
    onPrev: () => void;
    onNext: () => void;
}

export function Lightbox({ images, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
            if (e.key === 'ArrowLeft') onPrev();
            if (e.key === 'ArrowRight') onNext();
        },
        [ onClose, onPrev, onNext ]
    );

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [ handleKeyDown ]);

    return (
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
                onClick={onClose}
            >
                <button
                    className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-50"
                    onClick={onClose}
                    aria-label="Close"
                >
                    <X className="w-8 h-8" />
                </button>

                {images.length > 1 && (
                    <>
                        <button
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                onPrev();
                            }}
                            aria-label="Previous"
                        >
                            <ChevronLeft className="w-10 h-10" />
                        </button>
                        <button
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-50"
                            onClick={(e) => {
                                e.stopPropagation();
                                onNext();
                            }}
                            aria-label="Next"
                        >
                            <ChevronRight className="w-10 h-10" />
                        </button>
                    </>
                )}

                <motion.img
                    key={currentIndex}
                    src={images[ currentIndex ]}
                    alt=""
                    className="max-h-[90vh] max-w-[90vw] object-contain"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onClick={(e) => e.stopPropagation()}
                />
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
                    {currentIndex + 1} / {images.length}
                </div>
            </motion.div>
        </AnimatePresence>
    );
}