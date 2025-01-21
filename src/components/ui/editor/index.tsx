'use client';

import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import UnderLine from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import { cn } from '@/lib/utils';
import MenuBar from './menu-bar';
import { useEffect } from 'react';

type EditorProps = {
  value: string;
  onChange?: (value: string) => void;
  className?: string;
};
const Editor = ({ value, className, onChange }: EditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: {
            class: 'list-disc pl-4',
          },
        },
        orderedList: {
          HTMLAttributes: {
            class: 'list-decimal  pl-4',
          },
        },
      }),
      UnderLine,
      TextAlign.configure({
        types: ['headling', 'paragraph'],
      }),
    ],
    content: { value },
    editorProps: {
      attributes: {
        class: 'focus:outline-none h-full p-4',
      },
    },
    onCreate({ editor }) {
      onChange?.(editor.getHTML());
    },
    onUpdate({ editor }) {
      onChange?.(editor.getHTML());
    },
    autofocus: false,
  });

  useEffect(() => {
    const editorHTML = editor?.getHTML();

    if (editorHTML !== value) {
      setTimeout(() => {
        editor?.commands.setContent(value);
      }, 0);
    }
  }, [value]);

  return (
    <div
      className={cn(
        ' bg-background border border-muted rounded-md w-full flex flex-col ',
        className
      )}
    >
      <MenuBar editor={editor} />
      <div className=" h-full [&>div]:h-full flex flex-col overflow-y-auto">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};

export default Editor;
