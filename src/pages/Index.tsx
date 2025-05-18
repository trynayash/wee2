
import React, { useState, useEffect } from "react";
import { toast } from "@/components/ui/use-toast";
import { generatePDF } from "@/components/PDFGenerator";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Overview from "@/components/Overview";
import Objectives from "@/components/Objectives";
import Strategy from "@/components/Strategy";
import Results from "@/components/Results";
import Takeaways from "@/components/Takeaways";
import Testimonial from "@/components/Testimonial";
import DownloadSection from "@/components/Download";
import Footer from "@/components/Footer";

const Index = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    toast({
      title: "Preparing PDF",
      description: "Please wait while we generate your case study PDF...",
    });

    try {
      await generatePDF();
      toast({
        title: "Download Started",
        description: "The case study PDF has been downloaded!",
        variant: "default",
      });
    } catch (error) {
      console.error("Error generating PDF:", error);
      toast({
        title: "Download Failed",
        description: "There was an error generating the PDF. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsDownloading(false);
    }
  };

  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href');
        if (!href) return;
        
        const section = document.querySelector(href);
        if (section) {
          window.scrollTo({
            top: section.getBoundingClientRect().top + window.scrollY - 100,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="font-opensans text-gray-800">
      <Header onDownloadClick={handleDownload} />
      <Hero onDownloadClick={handleDownload} />
      <Overview />
      <Objectives />
      <Strategy />
      <Results />
      <Takeaways />
      <Testimonial />
      <DownloadSection onDownloadClick={handleDownload} />
      <Footer />
    </div>
  );
};

export default Index;
