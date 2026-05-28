import {
  ChevronRight,
  Home,
  Layers,
  Map,
  Menu,
  Paintbrush,
  Plug,
  ShieldCheck,
  Stethoscope,
  Workflow,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

type SidebarProps = {
  activeTab: string;
  setActiveTab: (id: string) => void;
  isOpen: boolean;
};

export function Sidebar({ activeTab, setActiveTab, isOpen }: SidebarProps) {
  const navs = [
    { id: 'hero', icon: Home, label: '工作台总览' },
    { id: 'workflow', icon: Layers, label: '完整工作流' },
    { id: 'provider', icon: Plug, label: 'AI 接入中心' },
    { id: 'pipeline', icon: Workflow, label: '原型流水线' },
    { id: 'clinic', icon: Stethoscope, label: 'Prompt 设计' },
    { id: 'figmamake', icon: Paintbrush, label: '前端搭建落地' },
    { id: 'safety', icon: ShieldCheck, label: '安全红线' },
    { id: 'skill', icon: Map, label: '进阶路线' },
  ];

  return (
    <div className={cn(
      'w-48 bg-slate-950 text-slate-300 h-screen fixed left-0 top-0 flex flex-col border-r border-slate-800 z-50 transition-transform duration-300',
      isOpen ? 'translate-x-0' : '-translate-x-full'
    )}>
      <div className="p-5 border-b border-slate-800">
        <h1 className="text-lg font-black text-white flex items-center gap-2 tracking-tight">
          <Layers className="w-5 h-5 text-primary shrink-0" />
          AI Workbench
        </h1>
        <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-semibold">Enterprise Toolkit</p>
      </div>

      <div className="flex-1 py-5 px-3 space-y-1 overflow-y-auto custom-scrollbar">
        {navs.map((n) => (
          <button
            key={n.id}
            onClick={() => setActiveTab(n.id)}
            className={cn(
              'w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left outline-none',
              activeTab === n.id ? 'bg-primary text-white shadow-md shadow-primary/20 scale-[1.02]' : 'hover:bg-slate-800 hover:text-white'
            )}
          >
            <n.icon className={cn('w-4 h-4 shrink-0', activeTab === n.id ? 'text-white' : 'text-slate-400')} />
            <span className="truncate font-medium">{n.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

type HeaderProps = {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  currentLabel: string;
};

export function Header({ isOpen, setIsOpen, currentLabel }: HeaderProps) {
  return (
    <div className="h-16 bg-white/80 backdrop-blur-md border-b border-border sticky top-0 z-40 flex items-center justify-between px-4 md:px-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-1.5 hover:bg-muted rounded-md text-muted-foreground hover:text-foreground transition-colors"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground hidden sm:flex">
          <span>AI Workflow Lab</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-foreground">{currentLabel}</span>
        </div>
      </div>
      <div />
    </div>
  );
}
