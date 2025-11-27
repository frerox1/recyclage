import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Bot, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

interface AIChatProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AIChat({ open, onOpenChange }: AIChatProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [embedKey, setEmbedKey] = useState(0);
  const { theme } = useTheme();

  useEffect(() => {
    if (open) {
      const existingScript = document.querySelector('script[src="https://studio.pickaxe.co/api/embed/bundle.js"]');
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = 'https://studio.pickaxe.co/api/embed/bundle.js';
        script.defer = true;
        script.onload = () => {
          setEmbedKey(prev => prev + 1);
        };
        document.body.appendChild(script);
      } else {
        setEmbedKey(prev => prev + 1);
      }
    }
  }, [open, theme]);

  const deploymentId = theme === 'dark' 
    ? 'deployment-afcd3047-9cd1-4849-bea0-4a67ad07f5ec'
    : 'deployment-856e4e42-a135-4ce5-aeda-7a915c379947';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent 
        className={`p-0 gap-0 transition-all duration-300 ease-in-out flex flex-col ${
          isMaximized 
            ? 'max-w-[95vw] w-[95vw] h-[95vh]' 
            : 'max-w-4xl w-full h-[85vh]'
        }`}
      >
        <DialogDescription className="sr-only">
          AI Assistant for Maria School Recycling Project
        </DialogDescription>
        <DialogHeader className="px-4 py-3 border-b flex-row items-center justify-between space-y-0 bg-background/95 backdrop-blur-sm shrink-0 gap-3">
          <DialogTitle className="flex items-center gap-2 text-base">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Bot className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="font-semibold">Assistant IA</div>
              <div className="text-[10px] text-muted-foreground font-normal">Recyclage Maria</div>
            </div>
          </DialogTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMaximized(!isMaximized)}
            className="hover:bg-primary/10 transition-colors h-8 w-8 p-0 shrink-0"
            title={isMaximized ? "Réduire" : "Agrandir"}
          >
            {isMaximized ? (
              <Minimize2 className="w-3.5 h-3.5" />
            ) : (
              <Maximize2 className="w-3.5 h-3.5" />
            )}
          </Button>
        </DialogHeader>
        <div className="flex-1 overflow-hidden min-h-0">
          <div 
            id={deploymentId}
            className="w-full h-full"
            key={`${deploymentId}-${embedKey}`}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
