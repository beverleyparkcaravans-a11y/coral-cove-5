import React from 'react';

export function Button({ className = '', size = 'default', variant = 'default', children, ...props }) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold transition disabled:opacity-50';
  const sizes = size === 'lg' ? 'h-12 px-6 text-base' : 'h-10 px-4 text-sm';
  const variants = variant === 'outline' ? 'border' : variant === 'secondary' ? 'bg-white text-slate-950 hover:bg-white/90' : '';
  return <button className={`${base} ${sizes} ${variants} ${className}`} {...props}>{children}</button>;
}
