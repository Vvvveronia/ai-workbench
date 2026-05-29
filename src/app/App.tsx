import React, { useState } from 'react';
import { 
  Home, Plug, Stethoscope, Layers, Zap, Database, 
  ShieldCheck, Map, Terminal, CheckCircle2, AlertCircle, 
  ChevronRight, Play, Copy, ExternalLink, Code2, Cpu, 
  Search, Bookmark, FileText, Check, AlertTriangle,
  Menu, X, Sparkles, Activity, FileCode, CheckSquare, ListChecks,
  MonitorPlay, Rocket, UserCircle, Settings, Download, Lightbulb,
  Link, ArrowRight, Server, Shield, Workflow, Lock, LayoutTemplate,
  History, Fingerprint, Info, Wand2, Paintbrush, Share2, Globe, MessageSquare, IterationCcw
} from 'lucide-react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Accordion from '@radix-ui/react-accordion';
import { Header, Sidebar } from './components/AppShell';
import { cn } from './lib/utils';
import figmaMakeEntryImage from '../imports/figma make互动按钮.png';
import figmaMakePromptImage from '../imports/figma make prompt页面.png';
import figmaMakePublishImage from '../imports/publish.png';
import codexRebuildImage from '../imports/复现.png';
import mcpSetupImage from '../imports/mcp界面.png';

const promptApiUrl = import.meta.env.VITE_PROMPT_API_URL || '/api/generate-prompt';

// ----------------- Components -----------------

// 1. Hero Dashboard
function Hero() {
  return (
    <section id="hero" className="flex-1 flex flex-col justify-center py-12 px-8 min-h-[80vh]">
      <div className="max-w-[1400px] mx-auto flex flex-col justify-center items-center text-center mt-4 mb-16">
        <div className="space-y-10 max-w-4xl">
          <div className="space-y-6">
            <h2 className="text-primary font-bold tracking-widest uppercase text-[11px] mb-2">
              ENTERPRISE AI WORKBENCH｜AI WORKFLOW ARCHITECTURE
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-bold text-foreground leading-[1.15] tracking-tight">
              从模型接入到原型交付：<br className="hidden md:block" />
              构建产品运营的 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-500">AI 工作流</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mx-auto max-w-3xl">
              本次分享会将围绕一条完整的 AI 落地链路展开：从 <strong className="text-foreground font-semibold">CFuse 托管</strong> 接入 Claude / Codex / Gemini，到结构化 <strong className="text-foreground font-semibold">Prompt 设计</strong>，再到 <strong className="text-foreground font-semibold">GPT + Figma Make + Codex</strong> 的原型生产流水线，最终将过程沉淀为<strong className="text-foreground font-semibold">团队可复用资产</strong>，并通过<strong className="text-foreground font-semibold">安全红线</strong>控制风险。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function VibeExamples() {
  const examples = [
    {
      title: '内部二级页面',
      label: 'Vibe Coding',
      description: '从业务指令快速生成可演示的二级页面，适合内部看板、流程页和轻量工具入口。',
      url: 'https://vibe.antgroup-inc.cn/apps/ovjxn1mztng#/command',
      icon: MonitorPlay,
      accent: 'from-primary/15 to-cyan-500/10',
      tags: ['内部应用', '二级页面', '快速验证'],
    },
    {
      title: '有记忆的 Agent',
      label: 'Agent Demo',
      description: '一个可以自动更迭、有记忆能力的 Agent 页面，用 Vibe Coding 搭出可体验的产品雏形。',
      url: 'https://www.lkqbc.com/',
      icon: Sparkles,
      accent: 'from-indigo-500/15 to-emerald-500/10',
      tags: ['记忆能力', '自动迭代', '在线访问'],
    },
    {
      title: '这套 AI Workbench',
      label: 'Current Page',
      description: '现在正在展示的整套页面本身，也来自 Vibe Coding 生成后持续整理、接 API、部署上线。',
      url: 'https://vvvveronia.github.io/ai-workbench/',
      icon: Workflow,
      accent: 'from-violet-500/15 to-slate-500/10',
      tags: ['工作台', 'API 接入', 'GitHub Pages'],
    },
  ];

  return (
    <section id="vibe-examples" className="px-8 pb-14">
      <div className="max-w-[1400px] mx-auto">
        <div className="rounded-[2rem] border border-border bg-white/80 shadow-sm p-6 md:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
                <Rocket className="w-3.5 h-3.5" />
                Vibe Coding Examples
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">先看几个已经跑起来的例子</h3>
              <p className="text-muted-foreground max-w-2xl leading-relaxed">
                不是先讲概念，而是先让大家看到：用自然语言和少量迭代，已经可以把页面、Agent 和内部工具快速做成可访问的 Demo。
              </p>
            </div>
            <div className="text-sm text-muted-foreground bg-slate-50 border border-border rounded-xl px-4 py-3">
              核心感受：先做出来，再判断值不值得继续工程化。
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {examples.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.title}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all hover:-translate-y-1"
                >
                  <div className={`h-28 rounded-xl bg-gradient-to-br ${item.accent} border border-border/70 mb-5 p-4 flex flex-col justify-between overflow-hidden`}>
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground">CASE 0{index + 1}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-white/80 border border-white shadow-sm flex items-center justify-center text-primary">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-bold text-foreground truncate">{item.title}</div>
                        <div className="text-xs text-muted-foreground truncate">{item.label}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h4 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{item.title}</h4>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0 mt-1" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed min-h-[4.5rem]">{item.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md bg-slate-50 border border-border text-[11px] font-semibold text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolSelectionAdvice() {
  return (
    <div className="w-full">
      <div className="mb-8 flex flex-col items-center text-center">
        <h3 className="text-2xl font-bold text-foreground mb-2">工具选型建议</h3>
        <p className="text-muted-foreground text-sm max-w-2xl">不同需求，不同工作流：不是所有场景都需要同一套 AI 工具链。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.7fr] gap-6 relative">
        <div className="bg-card border border-border rounded-2xl p-6 flex flex-col shadow-sm hover:shadow-md hover:border-primary/40 transition-all group">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-1">内部看板 / 团队传阅</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded uppercase tracking-wider">Fast</span>
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded uppercase tracking-wider">Internal</span>
                <span className="text-[10px] font-bold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-2 py-1 rounded uppercase tracking-wider">Low UI Req</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800/50 flex items-center justify-center shrink-0">
              <LayoutTemplate className="w-5 h-5 text-slate-500" />
            </div>
          </div>
          
          <div className="flex-1 space-y-4 text-sm mt-2">
            <div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">适用场景</div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> 团队内部查看的看板</li>
                <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> 不追求高保真 UI</li>
                <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> 快速生成页面结构和内容</li>
                <li className="flex gap-2 text-muted-foreground text-xs ml-5 mt-0.5">例如：数据看板、周报页、信息汇总页、简单管理后台</li>
              </ul>
            </div>
            
            <div className="bg-primary/5 p-3 rounded-lg border border-primary/10">
              <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">推荐方式</div>
              <div className="font-medium text-foreground">公司 Muse / Vibe Coding 快速生成</div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">优点</div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 上手快</li>
                  <li>• 不需要复杂设计流程</li>
                  <li>• 适合低成本验证</li>
                </ul>
              </div>
              <div>
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400 mb-1">局限</div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 设计表现一般</li>
                  <li>• 模型能力不稳定</li>
                  <li>• 复杂交互不易控制</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 lg:p-7 flex flex-col shadow-md hover:shadow-lg hover:border-primary/50 transition-all group relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] font-bold px-3 py-1 rounded-bl-lg uppercase tracking-wider">
            推荐链路
          </div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="text-lg font-bold text-foreground mb-1">高保真原型 + 前端复现落地</h4>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase tracking-wider">High Fidelity</span>
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase tracking-wider">Product Demo</span>
                <span className="text-[10px] font-bold bg-primary/10 text-primary px-2 py-1 rounded uppercase tracking-wider">Design First</span>
                <span className="text-[10px] font-bold bg-indigo-500/10 text-indigo-500 px-2 py-1 rounded uppercase tracking-wider">Code</span>
                <span className="text-[10px] font-bold bg-indigo-500/10 text-indigo-500 px-2 py-1 rounded uppercase tracking-wider">Deploy</span>
                <span className="text-[10px] font-bold bg-indigo-500/10 text-indigo-500 px-2 py-1 rounded uppercase tracking-wider">Engineering</span>
              </div>
            </div>
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5 text-primary" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 2xl:grid-cols-[1fr_auto_1fr] gap-5 flex-1 text-sm mt-2">
            <div className="space-y-4">
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">适用场景</div>
              <ul className="space-y-1 text-slate-600 dark:text-slate-300">
                <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> 需要对老板、团队或用户展示</li>
                <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" /> 需要更强页面观感，像真实产品而不是普通页面</li>
                <li className="flex gap-2"><Check className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" /> 需要继续接 API、部署或工程化迭代</li>
                <li className="flex gap-2 text-muted-foreground text-xs ml-5 mt-0.5">例如：产品 Demo、工具原型、对外展示页、可运行内部工具</li>
              </ul>
            </div>

            <div className="hidden 2xl:flex items-center justify-center px-1">
              <div className="flex flex-col items-center text-primary/60">
                <div className="w-px h-16 bg-primary/20"></div>
                <ArrowRight className="w-5 h-5 my-2" />
                <div className="w-px h-16 bg-indigo-500/20"></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-primary/10 p-3 rounded-lg border border-primary/20 shadow-inner">
                  <div className="text-xs font-semibold text-primary uppercase tracking-wider mb-1">Step 1 设计生成</div>
                  <div className="font-medium text-foreground">Gemini 3.1 Pro + Figma Make</div>
                </div>
                <div className="bg-indigo-500/5 p-3 rounded-lg border border-indigo-500/10">
                  <div className="text-xs font-semibold text-indigo-500 uppercase tracking-wider mb-1">Step 2 代码落地</div>
                  <div className="font-medium text-foreground">Codex + GPT-5.5 工程实现</div>
                </div>
              </div>

              <div>
                <div className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-1">核心优势</div>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 先保证视觉质量，再保证代码可维护</li>
                  <li>• 兼容文字、线框图、Figma 组件、PNG/JPG 等多维输入</li>
                  <li>• 根据 Figma 页面结构精准复现前端，后续可接 API 和部署</li>
                </ul>
              </div>

              <div className="bg-slate-50 border border-border rounded-lg p-3">
                <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">协作链路</div>
                <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-600">
                  <span>产品方案</span><ArrowRight className="w-3.5 h-3.5 text-primary" />
                  <span>Figma Make</span><ArrowRight className="w-3.5 h-3.5 text-primary" />
                  <span>MCP 设计上下文</span><ArrowRight className="w-3.5 h-3.5 text-indigo-500" />
                  <span>Codex 复现</span><ArrowRight className="w-3.5 h-3.5 text-indigo-500" />
                  <span>人工验收</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-xl p-4 text-center flex flex-col items-center justify-center">
        <p className="text-sm font-medium text-foreground">
          轻量内部页可直接用 Muse / Vibe；高质量产品原型建议先用 <strong className="text-primary font-bold">Gemini / Figma Make 设计</strong>，再用 <strong className="text-indigo-500 font-bold">Codex / GPT-5.5 复现成代码</strong>。
        </p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <Lock className="w-3.5 h-3.5" />
          <span>账号与成本建议：优先使用公司授权或官方合规账号；如使用个人账号，请注意账号安全与公司数据安全规范。</span>
        </div>
      </div>
    </div>
  );
}

// 1.5 Workflow Overview
function WorkflowOverview({ setActiveTab }: { setActiveTab: (id: string) => void }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const steps = [
    { num: "01", title: "接得上", eng: "Access Layer", desc: "CFuse 托管 Claude / Codex / Gemini，打通公司内网 AI 使用通路。", tags: ["CFuse", "Provider", "Network"] },
    { num: "02", title: "问得清", eng: "Prompt Layer", desc: "用 PROMPT SOP 把模糊业务问题转成结构化任务。", tags: ["SOP", "Context", "Output"] },
    { num: "03", title: "做得出", eng: "Prototype Layer", desc: "通过 GPT → Figma Make → Codex，将想法快速变成可运行原型。", tags: ["GPT", "Figma Make", "Codex"] },
    { num: "04", title: "沉得下", eng: "Asset Layer", desc: "沉淀 Prompt 模板、工作流 SOP、页面组件和复盘案例。", tags: ["Template", "SOP", "Library"] },
    { num: "05", title: "用得稳", eng: "Governance Layer", desc: "通过安全红线、人工复核和脱敏原则控制使用风险。", tags: ["Security", "Review", "Masking"] }
  ];

  return (
    <section id="workflow" className="py-12 px-8">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">完整 AI 落地链路</h3>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">不是单点使用 AI，而是把接入、提问、原型、沉淀和治理串成一条可复用流程。</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute top-1/2 left-0 w-full h-[2px] bg-slate-200/50 -translate-y-1/2 hidden lg:block z-0"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 relative z-10">
            {steps.map((item, i) => {
              const active = i === activeIndex;
              return (
                <div 
                  key={i} 
                  onClick={() => setActiveIndex(i)}
                  className={cn(
                    "p-6 rounded-2xl border transition-all duration-300 group hover:-translate-y-1 hover:shadow-xl relative bg-white cursor-pointer",
                    active 
                      ? "border-primary shadow-lg shadow-primary/10 ring-1 ring-primary/20" 
                      : "border-border hover:border-primary/40 shadow-sm"
                  )}
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn(
                      "text-sm font-black tracking-widest transition-colors",
                      active ? "text-primary" : "text-slate-300 group-hover:text-primary/60"
                    )}>
                      {item.num}
                    </div>
                    {active && (
                      <div className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></div>
                    )}
                  </div>
                  
                  <h4 className={cn(
                    "font-bold text-xl mb-1 transition-colors",
                    active ? "text-primary" : "text-foreground"
                  )}>{item.title}</h4>
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-5">{item.eng}</div>
                  
                  <p className="text-sm text-slate-600 leading-relaxed mb-8 h-24">
                    {item.desc}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className={cn(
                        "px-2.5 py-1 text-[11px] font-semibold rounded-md transition-colors",
                        active 
                          ? "bg-primary/10 text-primary border border-primary/20" 
                          : "bg-slate-50 text-slate-500 border border-slate-200"
                      )}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-20 flex justify-center">
          <button 
            onClick={() => setActiveTab('provider')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5"
          >
            <Plug className="w-5 h-5" />
            进入第一步：接入 AI
          </button>
        </div>
      </div>
    </section>
  );
}

// 2. Provider Hub
function ProviderHub() {
  const providers = [
    {
      name: "Claude Code",
      status: "已支持",
      statusColor: "text-success bg-success/10",
      method: "CFuse 托管 / 官方 Claude Code",
      tags: ["CLI", "官方通道", "CFuse 托管", "数据安全"],
    },
    {
      name: "Codex / GPT",
      status: "已支持",
      statusColor: "text-success bg-success/10",
      method: "CFuse 托管 / CLI / App",
      tags: ["CLI", "Codex App", "官方订阅", "CFuse 托管"],
    },
    {
      name: "Gemini",
      status: "预计支持",
      statusColor: "text-warning bg-warning/10",
      method: "预计上线",
      tags: ["占坑", "预计上线", "多模型补充"],
    }
  ];

  return (
    <section id="provider" className="py-16 px-8 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-foreground mb-2">AI 接入中心</h2>
          <p className="text-muted-foreground text-lg mb-4">公司内网支持 Claude Code、Codex / GPT 及 Gemini。</p>
          
          <div className="flex items-start gap-3 p-4 bg-primary/5 border border-primary/20 rounded-lg max-w-2xl">
            <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
            <div className="text-sm text-foreground/80 leading-relaxed">
              <span className="font-semibold text-primary">报销提示：</span>
              这三家 AI 在 6.1 后可以申请报销，具体条款可以蚂蚁小蜜搜索<span className="font-semibold px-1">“token报销”</span>查看。
            </div>
          </div>
        </div>

        <div className="mb-14 rounded-3xl border border-border bg-slate-50/70 p-6 lg:p-8">
          <ToolSelectionAdvice />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {providers.map((p, i) => (
            <div key={i} className="border border-border rounded-xl p-6 shadow-sm flex flex-col bg-slate-50 hover:border-primary/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{p.name}</h3>
                <span className={cn("px-2.5 py-1 rounded-full text-xs font-medium", p.statusColor)}>
                  {p.status}
                </span>
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <div className="text-xs text-muted-foreground mb-1">接入方式</div>
                  <div className="text-sm font-medium">{p.method}</div>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {p.tags.map(t => (
                    <span key={t} className="px-2 py-1 bg-white border border-border text-xs rounded-md text-muted-foreground">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 3. CFuse Setup Wizard
function SetupWizard() {
  const [activeStep, setActiveStep] = useState(1);
  const [copyToastVisible, setCopyToastVisible] = useState(false);
  const steps = [
    {
      num: 1, title: "安装 CFuse", tag: "Install",
      desc: "首次使用前，先在终端安装 CFuse 客户端。安装完成后再继续检查版本和执行托管。",
      cmd: "curl -o- http://cloudideoss.cn-hangzhou-alipay-b.oss-cdn.aliyun-inc.com/cfuse/install.sh | bash",
      hint: "如果终端提示需要确认，请按提示完成安装；安装后建议重新打开一个终端窗口。"
    },
    {
      num: 2, title: "检查客户端版本", tag: "Required",
      desc: "确认客户端版本 ≥ 2.6.19。",
      cmd: "cfuse --cf --version",
      hint: "如果版本过低，需要先升级客户端。"
    },
    {
      num: 3, title: "执行托管命令", tag: "Manage",
      desc: "确认需要托管的产品，然后根据提示完成托管备案。",
      cmd: "# Claude Code\ncfuse --cc manage\n\n# Codex\ncfuse --cx manage\n\n# Gemini\n预计上线",
      hint: "托管过程中将完成备案与本地客户端采集插件安装。"
    },
    {
      num: 4, title: "等待托管过程", tag: "Processing",
      desc: "等待托管完成，过程中通常会执行两部分操作：\n1. 上报托管备案\n2. 本地客户端安装统计 / 采集插件",
      cmd: "",
      hint: "向客户端中安装采集插件，包括 CFuse 内置版本客户端和官方版本客户端。"
    },
    {
      num: 5, title: "验证托管状态", tag: "Verify",
      desc: "如果状态显示“已备案”，说明托管成功。",
      cmd: "# Claude Code\ncfuse --cc manage status\n\n# Codex\ncfuse --cx manage status",
      hint: ""
    },
    {
      num: 6, title: "启动官方工具", tag: "Launch",
      desc: "托管后，可以通过 cfuse 启动，也可以直接使用官方 CLI 或 App。",
      cmd: "# Claude Code\ncfuse --cc\n\n# Codex\ncfuse --cx",
      hint: ""
    }
  ];
  const currentStep = steps[activeStep - 1];

  const copyStepCommand = async () => {
    if (!currentStep.cmd) return;
    await navigator.clipboard.writeText(currentStep.cmd);
    setCopyToastVisible(true);
    window.setTimeout(() => setCopyToastVisible(false), 1800);
  };

  return (
    <section id="setup" className="py-16 px-8 bg-slate-50 border-t border-border">
      {copyToastVisible && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[80] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center gap-2 rounded-full bg-slate-950 text-white px-5 py-3 shadow-2xl border border-white/10">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span className="text-sm font-semibold">复制成功</span>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-foreground mb-2">CFuse Bridge SOP</h2>
          <p className="text-muted-foreground text-lg">最快搭建公司内网与 AI 工具的桥梁。</p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 text-left">
          <div className="md:w-1/3 space-y-2 relative">
            <div className="absolute left-4 top-4 bottom-4 w-px bg-border z-0"></div>
            {steps.map(s => (
              <div 
                key={s.num} 
                className={cn("relative z-10 p-4 rounded-xl cursor-pointer transition-colors flex items-center gap-4", activeStep === s.num ? "bg-white border border-primary shadow-sm" : "hover:bg-muted/50")}
                onClick={() => setActiveStep(s.num)}
              >
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors", activeStep === s.num ? "bg-primary text-white" : "bg-muted border border-border text-muted-foreground")}>
                  {s.num}
                </div>
                <div>
                  <div className={cn("font-medium", activeStep === s.num ? "text-primary" : "text-foreground")}>{s.title}</div>
                  <div className="text-xs text-muted-foreground mt-0.5">{s.tag}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="md:w-2/3">
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm min-h-[400px] flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Step {activeStep}: {currentStep.title}</h3>
                <span className="px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">{currentStep.tag}</span>
              </div>
              
              <div className="flex-1 space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-2">说明</h4>
                  <p className="text-base whitespace-pre-line leading-relaxed">{currentStep.desc}</p>
                </div>

                {currentStep.cmd && (
                  <div>
                    <div className="flex items-center justify-between gap-3 mb-2">
                      <h4 className="text-sm font-medium text-muted-foreground">命令</h4>
                      <button
                        type="button"
                        onClick={copyStepCommand}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-primary hover:text-white text-slate-600 text-xs font-semibold transition-colors border border-border"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        复制命令
                      </button>
                    </div>
                    <div className="relative">
                      <pre className="bg-slate-900 text-slate-50 p-4 rounded-lg font-mono text-sm whitespace-pre-wrap break-all">
                        <code>{currentStep.cmd}</code>
                      </pre>
                    </div>
                  </div>
                )}

                {currentStep.hint && (
                  <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg flex gap-3 text-sm text-blue-800">
                    <AlertCircle className="w-5 h-5 shrink-0 text-blue-500" />
                    <div>{currentStep.hint}</div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 bg-white border border-border p-4 rounded-xl shadow-sm text-sm text-muted-foreground flex items-start gap-3">
              <Shield className="w-5 h-5 text-success shrink-0" />
              <p>CFuse 托管后，支持通过网页版 AI、官方 App、CLI、Vibe Coding 工具进行使用，在符合公司托管与安全要求前提下，兼顾使用体验与数据安全。</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 4. Troubleshooting
function Troubleshooting() {
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <section id="troubleshoot" className="py-16 px-8 bg-white border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-foreground mb-2">Codex 登录故障排查</h2>
          <p className="text-muted-foreground text-lg">蚁家 VPN 下 Codex App / Codex 登录失败怎么办？</p>
        </div>

        <div className="bg-red-50/50 border border-red-100 rounded-xl p-5 mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-red-500" />
            </div>
            <div>
              <h3 className="text-base font-bold text-red-900">当前症状</h3>
              <p className="text-sm text-red-800/80 mt-0.5">
                使用蚁家 VPN 时，Codex App / Codex 可能无法正常登录，导致后续 cfuse --cx login 托管失败。
              </p>
            </div>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-100 text-red-700 text-xs font-semibold rounded-md shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Login Failed / Network Blocked
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
          <div className="bg-white border border-border rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">解决流程</h3>
            <div className="space-y-4">
              {[
                "打开蚁家网络设置",
                "进入「实验室」",
                "网络选择「gost」",
                "在终端输入本地代理命令",
                "通过终端启动 Codex App",
                "在 Codex App 完成登录",
                "回到终端执行 cfuse --cx login"
              ].map((step, i) => (
                <div key={i} className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent text-primary text-xs flex items-center justify-center font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <div className="text-sm text-foreground/90 pt-1">{step}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 flex flex-col">
            <div className="bg-slate-900 rounded-xl p-5 shadow-sm overflow-hidden relative group flex-1">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">终端命令</h3>
                <button 
                  onClick={() => handleCopy('export HTTP_PROXY=http://127.0.0.1:13659;\nexport HTTPS_PROXY=http://127.0.0.1:13659;\nopen /Applications/Codex.app')}
                  className="p-1.5 bg-slate-800 text-slate-300 rounded hover:text-white transition-colors flex items-center gap-1.5 text-xs opacity-0 group-hover:opacity-100"
                >
                  <Copy className="w-3.5 h-3.5" />
                </button>
              </div>
              <pre className="text-green-400 font-mono text-sm leading-relaxed whitespace-pre-wrap">
                export HTTP_PROXY=http://127.0.0.1:13659;<br/>
                export HTTPS_PROXY=http://127.0.0.1:13659;<br/>
                open /Applications/Codex.app
              </pre>
              <div className="mt-4 pt-4 border-t border-slate-700/50 relative group/sub">
                <div className="flex justify-between items-center mb-2">
                  <div className="text-xs text-slate-400">登录完成后执行：</div>
                  <button 
                    onClick={() => handleCopy('cfuse --cx login')}
                    className="p-1.5 bg-slate-800 text-slate-300 rounded hover:text-white transition-colors flex items-center gap-1.5 text-xs opacity-0 group-hover/sub:opacity-100"
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </button>
                </div>
                <pre className="text-green-400 font-mono text-sm">cfuse --cx login</pre>
              </div>
            </div>

            <div className="bg-green-50/50 border border-green-100 rounded-xl p-5">
              <h3 className="text-sm font-bold text-green-900 mb-2 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-500" />
                修复后效果
              </h3>
              <p className="text-xs text-green-800/80 leading-relaxed mb-1">
                完成登录与托管后，可以继续使用网页版 AI、官方 App 或 Vibe Coding 工具。适合在公司网络环境下兼顾使用效率与数据安全。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5. Prompt Quality Diagnosis
function PromptDiagnosis({ onRefactorClick }: { onRefactorClick: () => void }) {
  const [analyzing, setAnalyzing] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [input, setInput] = useState("帮我想一个优惠券活动。");

  const handleAnalyze = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setShowResult(true);
    }, 1200);
  };

  const symptoms = [
    { label: "业务目标缺失", desc: "AI 不知道你要拉新、促活、复购还是清库存。" },
    { label: "目标用户缺失", desc: "AI 不知道方案面向谁，也无法判断用户动机。" },
    { label: "业务约束缺失", desc: "AI 不知道预算、周期、资源、风控边界。" },
    { label: "输出结构缺失", desc: "AI 不知道你需要方案、文案、埋点、风险还是复盘指标。" },
    { label: "验收标准缺失", desc: "AI 不知道什么结果算好，无法自我检查。" },
  ];

  const suggestions = [
    { label: "补业务目标", ex: "提升新用户首单转化率。" },
    { label: "补目标用户", ex: "浏览过商品但未下单的新用户。" },
    { label: "补业务约束", ex: "预算有限，不能发大额无门槛券，开发周期不超过一周。" },
    { label: "补输出结构", ex: "输出活动玩法、券机制、页面文案、埋点方案、风险提示和复盘指标。" },
    { label: "补评审标准", ex: "从转化潜力、成本可控性、开发难度、用户理解成本四个维度评分。" },
  ];

  return (
    <section id="prompt-diagnosis" className="py-12 px-8 bg-slate-50 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-2">Prompt 质量诊断</h2>
          <p className="text-muted-foreground text-lg">先识别问题，再决定怎么重写。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
          {/* Input */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-bold text-foreground">输入原始 Prompt</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              输入一句自然语言需求，系统会判断它是否具备业务目标、上下文、约束、输出格式和验收标准。
            </p>
            <textarea 
              className="w-full h-32 p-4 bg-slate-50 border border-input rounded-xl text-sm resize-none focus:outline-none focus:ring-2 focus:ring-primary/50 mb-4 transition-all"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="例如：帮我想一个优惠券活动。"
            />
            <button 
              onClick={handleAnalyze}
              disabled={analyzing}
              className="w-full py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-primary/20"
            >
              {analyzing ? (
                <><Activity className="w-5 h-5 animate-pulse" /> 诊断中...</>
              ) : (
                <><Stethoscope className="w-5 h-5" /> 开始诊断</>
              )}
            </button>
            <p className="mt-3 text-center text-[11px] text-muted-foreground font-medium italic">
              越模糊的需求，越需要先结构化。
            </p>
          </div>

          {/* Diagnostics */}
          <div className="bg-white border border-border rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col min-h-[480px]">
            {!showResult && !analyzing && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-sm text-muted-foreground font-medium gap-3">
                <Search className="w-8 h-8 opacity-20" />
                等待输入诊断...
              </div>
            )}
            <h3 className="font-bold text-foreground mb-6">诊断结果</h3>
            
            <div className="flex items-baseline gap-4 mb-8">
              <div className="text-5xl font-black text-red-500">32</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-widest">/ 100 综合健康度</div>
            </div>

            <div className="space-y-3 mb-8">
              <div className="flex justify-between items-center text-sm p-3 bg-slate-50 rounded-xl border border-border/50">
                <span className="text-muted-foreground font-medium">诊断结论</span>
                <span className="font-bold text-foreground">许愿型 Prompt</span>
              </div>
              <div className="flex justify-between items-center text-sm p-3 bg-red-50 rounded-xl border border-red-100">
                <span className="text-red-700 font-medium">严重程度</span>
                <span className="font-bold text-red-600 px-2 py-0.5 rounded">高风险：结果不可控</span>
              </div>
            </div>

            <div className="flex-1">
              <h4 className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-4">主要缺失项</h4>
              <div className="space-y-2">
                {symptoms.map(sym => (
                  <div key={sym.label} className="group relative">
                    <div className="flex items-center gap-2 text-xs text-red-700 bg-red-50/50 p-2.5 rounded-lg border border-red-100/50 hover:bg-red-50 transition-colors">
                      <AlertTriangle className="w-3.5 h-3.5 text-red-500 shrink-0" /> 
                      <span className="font-bold">{sym.label}</span>
                    </div>
                    <div className="hidden group-hover:block absolute left-0 bottom-full mb-2 w-full p-3 bg-slate-900 text-white text-[11px] rounded-lg shadow-xl z-20 leading-relaxed animate-in fade-in slide-in-from-bottom-2">
                      {sym.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border flex items-center gap-2 text-xs text-muted-foreground italic font-medium">
              <Info className="w-3.5 h-3.5 text-primary" />
              这个 Prompt 可以生成内容，但很难生成可落地方案。
            </div>
          </div>

          {/* Advice */}
          <div className="bg-indigo-50/50 border border-primary/20 rounded-2xl p-6 shadow-sm relative overflow-hidden flex flex-col">
            {!showResult && !analyzing && (
              <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] z-10 flex flex-col items-center justify-center text-sm text-muted-foreground font-medium gap-3">
                <Sparkles className="w-8 h-8 opacity-20" />
                等待诊断结论...
              </div>
            )}
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-bold text-primary flex items-center gap-2">
                <Lightbulb className="w-5 h-5" /> 重构建议
              </h3>
              <span className="text-[10px] font-bold text-primary/60 uppercase tracking-tighter">Prompt QA</span>
            </div>
            <p className="text-sm text-indigo-900/70 mb-6 leading-relaxed">
              把模糊需求补成结构化任务。
            </p>
            
            <div className="flex-1 space-y-3">
              {suggestions.map((adv, i) => (
                <div key={i} className="bg-white p-3.5 rounded-xl border border-primary/10 shadow-sm hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                      {i + 1}
                    </div>
                    <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">{adv.label}</span>
                  </div>
                  <p className="text-[11px] text-muted-foreground ml-8 leading-relaxed italic">
                    示例：{adv.ex}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/60 rounded-xl text-xs text-center font-medium text-indigo-900/60 border border-primary/5">
              诊断不是结束，下一步是把缺失信息补全。
              <button 
                onClick={onRefactorClick}
                className="block w-full mt-3 text-primary hover:underline font-bold"
              >
                去补全 Prompt →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 5.5 Prompt Elements Breakdown
function PromptElementsBreakdown() {
  const elements = [
    { id: 'P1', title: 'P - Problem', sub: '业务问题', desc: '业务问题是什么？', ex: '提升新用户首单转化率。' },
    { id: 'R', title: 'R - Role', sub: '角色设定', desc: 'AI 应该以什么身份思考？', ex: '你是一个电商平台增长产品经理。' },
    { id: 'O', title: 'O - Output', sub: '输出要求', desc: '需要输出什么？', ex: '输出 5 个创新券玩法，并包含机制、路径、风险和埋点。' },
    { id: 'M', title: 'M - Material', sub: '背景信息', desc: '有哪些背景信息？', ex: '目标用户是浏览过商品但未下单的新用户。' },
    { id: 'P2', title: 'P - Parameters', sub: '限制条件', desc: '有哪些限制条件？', ex: '预算有限，不能大额补贴，开发周期不超过一周。' },
    { id: 'T', title: 'T - Test', sub: '验收标准', desc: '如何判断结果好不好？', ex: '从转化潜力、成本可控性、开发难度等维度评分。' },
  ];

  return (
    <section className="py-20 px-8 bg-white border-t border-border">
      <div className="max-w-[1400px] mx-auto text-center">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4">高质量 Prompt 需要哪些元素？</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">不是把话说长，而是把任务说完整。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 relative text-left">
          <div className="hidden lg:block absolute top-1/2 left-[10%] right-[10%] h-px bg-slate-200 -translate-y-12 z-0"></div>
          
          {elements.map((el, i) => (
            <div key={el.id} className="relative z-10 bg-white border border-border rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-primary/40 transition-all flex flex-col group">
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-black text-xl mb-6 mx-auto group-hover:scale-110 transition-transform">
                {el.id[0]}
              </div>
              <h4 className="font-bold text-foreground mb-1 text-center">{el.title}</h4>
              <div className="text-[10px] font-bold text-primary uppercase tracking-widest mb-4 text-center">{el.sub}</div>
              <p className="text-xs text-muted-foreground mb-4 leading-relaxed h-10 text-center">{el.desc}</p>
              <div className="mt-auto pt-4 border-t border-border/50">
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-2">业务示例</div>
                <p className="text-[11px] text-foreground/80 font-medium leading-relaxed italic">"{el.ex}"</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 inline-flex items-center gap-4 bg-slate-50 border border-border px-6 py-4 rounded-2xl">
          <div className="flex -space-x-2">
            {[1,2,3,4,5,6].map(n => (
              <div key={n} className="w-6 h-6 rounded-full bg-primary border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
                {n}
              </div>
            ))}
          </div>
          <p className="text-sm font-semibold text-foreground">
            一个好 Prompt = 业务目标 + 角色设定 + 背景材料 + 约束条件 + 输出格式 + 验收标准
          </p>
        </div>
      </div>
    </section>
  );
}

// 6. Prompt Refactor Converter
function PromptConverter() {
  const [activeStep, setActiveStep] = useState(3);
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [generatedPrompt, setGeneratedPrompt] = useState("");
  const [generateError, setGenerateError] = useState("");
  const [copySuccess, setCopySuccess] = useState(false);

  const [formData, setFormData] = useState({
    problem: "我想做一个优惠券活动，目标是提升新用户首单转化率。",
    role: "你是一个熟悉用户增长、活动策略和电商转化的资深产品运营专家。",
    output: "输出一份结构化活动方案，包含目标用户、核心机制、优惠策略、风控点、上线步骤和评估指标。",
    material: "浏览过商品但未下单的新用户，他们价格敏感，但对平台信任度不足。需要在这个季度冲刺新用户首单指标。",
    parameters: "活动开发周期不超过一周，预算有限，不能直接发大额无门槛券，规则不能太复杂，需要控制薅羊毛风险。",
    test: "从转化潜力、成本可控性、开发难度、用户理解成本四个维度评分。"
  });

  const handleGenerate = async () => {
    setGenerating(true);
    setGenerated(false);
    setGenerateError("");
    setGeneratedPrompt("");

    try {
      const response = await fetch(promptApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const contentType = response.headers.get('Content-Type') || '';
      const data = contentType.includes('application/json') ? await response.json() : {};
      if (!response.ok) {
        throw new Error(data?.error || 'Prompt API 未配置或暂不可用，请检查线上后端代理。');
      }

      setGeneratedPrompt(data.prompt);
      setGenerated(true);
      setActiveStep(3);
    } catch (error) {
      setGenerateError(error instanceof Error ? error.message : '生成失败，请稍后重试。');
    } finally {
      setGenerating(false);
    }
  };

  const clearForm = () => {
    setFormData({
      problem: "",
      role: "",
      output: "",
      material: "",
      parameters: "",
      test: ""
    });
    setGenerated(false);
    setGeneratedPrompt("");
    setGenerateError("");
    setCopySuccess(false);
    setActiveStep(2);
  };

  const outputPrompt = generatedPrompt;
  const promptSteps = [
    { id: 1, label: "自然语言描述" },
    { id: 2, label: "结构补全" },
    { id: 3, label: "Prompt 生成" }
  ];

  const handleCopyPrompt = async () => {
    if (!outputPrompt) return;
    await navigator.clipboard.writeText(outputPrompt);
    setCopySuccess(true);
    window.setTimeout(() => setCopySuccess(false), 1800);
  };

  return (
    <section id="prompt-converter" className="py-20 px-8 bg-slate-50 border-t border-border">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 text-left">
          <h2 className="text-3xl font-bold text-foreground mb-2">Prompt SOP Generator</h2>
          <p className="text-muted-foreground text-lg">用 PROMPT 六段法，把模糊业务需求整理成可复用的成熟 Prompt。</p>
        </div>

        <div className="bg-white border border-border rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-6 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 no-scrollbar">
            {promptSteps.map((step, i) => (
              <React.Fragment key={step.id}>
                <div className="flex items-center gap-3 shrink-0">
                  <div className={cn(
                    "w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all",
                    activeStep >= step.id ? "bg-primary text-white" : "bg-slate-100 text-slate-400 border border-slate-200"
                  )}>
                    {activeStep > step.id ? <Check className="w-4 h-4" /> : step.id}
                  </div>
                  <span className={cn("text-sm font-bold", activeStep >= step.id ? "text-foreground" : "text-slate-400")}>
                    {step.label}
                  </span>
                </div>
                {i < promptSteps.length - 1 && <div className={cn("h-px w-8 shrink-0", activeStep > step.id ? "bg-primary" : "bg-slate-200")}></div>}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="bg-white border border-border rounded-2xl p-8 shadow-md flex flex-col h-full text-left">
            <div className="mb-6">
              <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                <MonitorPlay className="w-5 h-5 text-primary" /> 自然语言多维描述
              </h3>
              <p className="text-sm text-muted-foreground">用你平时会说的话分模块描述需求，不需要写得很“专业”。</p>
            </div>

            <div className="space-y-4 flex-1 overflow-y-auto pr-2 custom-scrollbar">
              {[
                { id: "problem", label: "P - Problem", desc: "业务问题：你希望解决什么问题？" },
                { id: "role", label: "R - Role", desc: "角色设定：AI 应该扮演谁？" },
                { id: "output", label: "O - Output", desc: "输出要求：需要什么格式和内容？" },
                { id: "material", label: "M - Material", desc: "背景信息：有哪些上下文？" },
                { id: "parameters", label: "P - Parameters", desc: "限制条件：预算、排期、边界是什么？" },
                { id: "test", label: "T - Test", desc: "验收标准：如何判断结果好不好？" }
              ].map((field) => (
                <div key={field.id} className="bg-slate-50 p-4 rounded-xl border border-border">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-[12px] font-bold text-foreground">{field.label}</label>
                    <span className="text-[10px] text-muted-foreground">{field.desc}</span>
                  </div>
                  <textarea 
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => {
                      setFormData(prev => ({ ...prev, [field.id]: e.target.value }));
                      if (!generated) setActiveStep(2);
                      if (generateError) setGenerateError("");
                    }}
                    className="w-full bg-white border border-input rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-medium resize-none min-h-[60px]"
                    placeholder={`请输入${field.label}...`}
                  />
                </div>
              ))}
            </div>

            <div className="pt-6 mt-4 flex gap-3 border-t border-border">
              <button 
                onClick={handleGenerate}
                disabled={generating}
                className="flex-1 py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
              >
                {generating ? <><Activity className="w-5 h-5 animate-spin" /> 正在生成...</> : <><Code2 className="w-5 h-5" /> 一键生成成熟 Prompt</>}
              </button>
              <button onClick={clearForm} className="px-6 py-3.5 bg-slate-100 text-slate-600 font-bold rounded-xl hover:bg-slate-200 transition-colors">
                清空重写
              </button>
            </div>
            {generateError && (
              <div className="mt-3 rounded-xl border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-700">
                {generateError}
              </div>
            )}
          </div>

          <div className="flex flex-col h-full min-h-[700px] text-left">
            <div className="bg-slate-900 rounded-2xl flex flex-col h-full overflow-hidden shadow-2xl border border-slate-800">
              <div className="p-5 border-b border-slate-800 bg-slate-950 flex justify-between items-center">
                <div className="flex flex-col">
                  <h3 className="font-bold text-slate-200 flex items-center gap-2">
                    <Terminal className="w-4 h-4 text-primary" />
                    生成后的优质 Prompt
                  </h3>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">可直接复制给 AI 使用。</p>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={handleCopyPrompt}
                    disabled={!outputPrompt}
                    className="p-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:hover:bg-slate-800 text-slate-300 rounded-lg transition-colors border border-slate-700 shadow-inner group relative"
                  >
                    {copySuccess ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span className={cn(
                      "absolute -bottom-10 left-1/2 -translate-x-1/2 text-white text-[10px] px-2 py-1 rounded transition-opacity whitespace-nowrap",
                      copySuccess ? "bg-emerald-500 opacity-100" : "bg-slate-800 opacity-0 group-hover:opacity-100"
                    )}>
                      {copySuccess ? "复制成功" : "复制内容"}
                    </span>
                  </button>
                </div>
              </div>
              
              <div className="flex-1 p-8 overflow-y-auto custom-scrollbar relative group bg-slate-900/50">
                {!generated && !generating ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-600 gap-4">
                    <Zap className="w-12 h-12 opacity-10" />
                    <p className="text-sm font-medium">配置完左侧信息后点击生成</p>
                  </div>
                ) : generating ? (
                  <div className="space-y-4 animate-pulse">
                    {[1,2,3,4,5,6,7,8,9,10,11,12].map(i => (
                      <div key={i} className={cn("h-4 bg-slate-800 rounded-full", i % 3 === 0 ? "w-3/4" : i % 2 === 0 ? "w-5/6" : "w-full")}></div>
                    ))}
                  </div>
                ) : (
                  <pre className="text-slate-300 font-mono text-sm leading-relaxed whitespace-pre-wrap selection:bg-primary/30">
                    {outputPrompt}
                  </pre>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 7. Comparison Module
function PromptComparison() {
  return (
    <section className="pt-4 pb-20 px-8 bg-white">
      <div className="max-w-[1400px] mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">同一个需求，为什么结果不同？</h2>
          <p className="text-muted-foreground text-lg">差距不在于“会问”，而在于把需求翻译成可执行的任务。</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 justify-center text-left">
          <div className="flex-1 w-full max-w-md bg-white border-2 border-slate-100 rounded-3xl p-8 shadow-sm flex flex-col h-[400px]">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-slate-100 text-slate-500 text-[10px] font-bold rounded-full uppercase">差 Prompt</span>
              <AlertCircle className="w-4 h-4 text-slate-400" />
            </div>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/50 text-sm text-slate-600 italic mb-6 flex-1">
              "帮我想一个优惠券活动。"
            </div>
            <div className="space-y-2 mb-6">
              {["目标不清", "用户不明", "约束缺失", "输出发散", "无法验收"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-slate-400">
                  <X className="w-3.5 h-3.5 text-slate-300" /> {item}
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-slate-100">
              <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">预期结果</div>
              <div className="text-sm font-bold text-slate-500">容易得到泛泛创意，难以落地。</div>
            </div>
          </div>

          <div className="flex flex-col items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
              <ArrowRight className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-md">诊断</div>
              <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-md">补全</div>
              <div className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-bold rounded-md">重构</div>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md bg-white border-2 border-primary/20 rounded-3xl p-8 shadow-xl shadow-primary/5 flex flex-col h-[400px] ring-1 ring-primary/5">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase">优质 Prompt</span>
              <CheckCircle2 className="w-4 h-4 text-primary" />
            </div>
            <div className="bg-indigo-50/50 p-4 rounded-xl border border-primary/10 text-sm text-primary font-medium mb-6 flex-1 line-clamp-4">
              "你是一个电商平台增长产品经理。我的业务目标是提升新用户首单转化率。目标用户是浏览过商品但未下单的新用户... 按照以下格式输出方案..."
            </div>
            <div className="space-y-2 mb-6">
              {["任务明确", "结果可控", "方便评审", "可沉淀复用"].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-primary font-medium">
                  <Check className="w-3.5 h-3.5" /> {item}
                </div>
              ))}
            </div>
            <div className="mt-auto pt-4 border-t border-primary/10">
              <div className="text-[10px] font-bold text-primary/60 uppercase mb-1">预期结果</div>
              <div className="text-sm font-bold text-foreground">更容易得到可落地方案。</div>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-2xl mx-auto p-6 bg-slate-950 text-white rounded-3xl text-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <p className="text-lg font-bold relative z-10 italic">
            "Prompt Engineering 的核心不是“会问”，而是把模糊需求翻译成可执行任务。"
          </p>
        </div>
      </div>
    </section>
  );
}

// Prompt Refactor Suite Container
function PromptRefactorSuite() {
  const scrollToConverter = () => {
    const converter = document.getElementById('prompt-converter');
    if (converter) {
      converter.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col animate-in fade-in duration-700">
      <section className="bg-white px-8 py-12 text-left">
        <div className="max-w-[1400px] mx-auto">
          <h1 className="text-4xl font-black text-foreground mb-4 tracking-tight">Prompt Diagnosis & Refactor</h1>
          <p className="text-muted-foreground text-lg">把一句自然语言需求，诊断为结构化任务，并转换成可复用的高质量 Prompt。</p>
        </div>
      </section>
      
      <PromptComparison />
      <PromptDiagnosis onRefactorClick={scrollToConverter} />
      <PromptElementsBreakdown />
      <PromptConverter />
    </div>
  );
}

function FigmaMakeWorkflow() {
  const [previewImage, setPreviewImage] = useState<{ src: string; alt: string } | null>(null);
  const ZoomableImage = ({ src, alt }: { src: string; alt: string }) => (
    <button
      type="button"
      onClick={() => setPreviewImage({ src, alt })}
      className="group/image block w-full rounded-lg border border-slate-200 bg-white shadow-sm overflow-hidden text-left focus:outline-none focus:ring-2 focus:ring-primary/40"
      aria-label={`放大查看：${alt}`}
    >
      <span className="relative block">
        <img
          src={src}
          alt={alt}
          className="w-full h-auto object-contain bg-white transition-transform duration-300 group-hover/image:scale-[1.015]"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-slate-950/0 group-hover/image:bg-slate-950/20 transition-colors">
          <span className="opacity-0 group-hover/image:opacity-100 transition-opacity inline-flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-slate-700 shadow-lg">
            <Search className="w-3.5 h-3.5" />
            点击放大
          </span>
        </span>
      </span>
    </button>
  );

  return (
    <section id="figmamake" className="py-20 px-4 sm:px-6 lg:px-8 bg-background flex-1 border-t border-border/50 overflow-x-hidden">
      {previewImage && (
        <div
          className="fixed inset-0 z-[90] bg-slate-950/80 backdrop-blur-sm p-4 md:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setPreviewImage(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[90vh] rounded-2xl bg-white border border-white/20 shadow-2xl overflow-hidden"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 px-4 py-3 border-b border-border bg-white">
              <div className="min-w-0">
                <div className="text-sm font-bold text-foreground truncate">{previewImage.alt}</div>
                <div className="text-xs text-muted-foreground">点击背景或右上角关闭</div>
              </div>
              <button
                type="button"
                onClick={() => setPreviewImage(null)}
                className="w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors shrink-0"
                aria-label="关闭图片预览"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="max-h-[calc(90vh-4rem)] overflow-auto bg-slate-100 p-3">
              <img
                src={previewImage.src}
                alt={previewImage.alt}
                className="mx-auto max-w-full h-auto rounded-lg bg-white shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-3">前端搭建与 Demo 落地工作流</h2>
          <p className="text-muted-foreground text-lg max-w-3xl">从 Figma Make 生成页面，到 Codex 复现前端、连接 MCP 同步设计，再完成可展示 Demo。</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { 
              title: "多维度输入兼容", 
              desc: "Figma Make 不只支持文字指令，也可以基于黑白线框图、已有 Figma 组件、PNG/JPG 设计图生成页面，适配不同设计阶段的需求。",
              tags: ["Text Prompt", "Wireframe", "Figma Components", "Image Input"],
              icon: LayoutTemplate
            },
            { 
              title: "高保真还原设计", 
              desc: "可以调用 Figma 设计库、组件和样式规范，让生成结果尽量贴近团队品牌规范，减少后期二次调整成本。",
              tags: ["Design System", "Components", "Brand Consistency"],
              icon: Sparkles
            },
            { 
              title: "支持多轮迭代", 
              desc: "生成初稿后，可以通过自然语言继续要求修改，也可以手动微调布局、颜色、文案和组件状态，适合快速打磨产品原型。",
              tags: ["Iterate", "Edit", "Review"],
              icon: IterationCcw
            },
            { 
              title: "发布与协作能力", 
              desc: "生成的应用可以通过链接分享，也可以进一步发布到网页。后续还可以结合后端服务进行完整应用部署。",
              tags: ["Share", "Publish", "Team Collaboration"],
              icon: Globe
            }
          ].map((card, i) => (
            <div key={i} className="bg-card border border-border p-5 rounded-xl flex flex-col hover:border-primary/40 hover:shadow-md transition-all group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <card.icon className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-foreground mb-2">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4">{card.desc}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {card.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] font-bold bg-muted text-muted-foreground px-1.5 py-0.5 rounded uppercase">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">前端搭建怎么落地</h3>

          <div className="relative pl-10 space-y-4 before:absolute before:left-4 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-primary/40 before:via-border before:to-transparent">

            <div className="relative group is-active">
              <div className="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-primary shadow shrink-0 z-10">
                <span className="text-xs font-bold text-primary-foreground">1</span>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(280px,420px)] gap-5 items-start">
                  <div className="min-w-0">
                    <h4 className="font-bold text-lg text-foreground mb-1.5">Step 1｜进入 Make</h4>
                    <p className="text-sm text-muted-foreground">打开 Figma 后，在左侧导航或创建入口中选择 Create new / New，然后选择 Make，进入 AI 交互面板。</p>
                  </div>
                  <div className="bg-muted/50 p-2 rounded-xl border border-border/50 w-full min-w-0">
                    <ZoomableImage src={figmaMakeEntryImage} alt="Figma Make 入口示意图" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 z-10">
                <span className="text-xs font-bold">2</span>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <div className="grid grid-cols-1 xl:grid-cols-[minmax(420px,1.25fr)_minmax(0,0.95fr)] gap-5 items-start">
                  <div className="bg-muted/40 p-2 rounded-xl border border-border/50 min-w-0">
                    <ZoomableImage src={figmaMakePromptImage} alt="Figma Make 提示词输入与模板示意图" />
                  </div>

                  <div className="min-w-0">
                    <h4 className="font-bold text-lg text-foreground mb-1.5">Step 2｜选择合适的生成方式</h4>
                    <p className="text-sm text-muted-foreground mb-4">进入 Make 后，可以直接写提示词，也可以上传设计素材辅助生成，还可以从他人的示例模板开始改。</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-2">
                      {[
                        { title: "写提示词生成", tag: "Prompt", desc: "描述页面目标、布局、视觉风格和关键交互。" },
                        { title: "上传设计辅助", tag: "Attach", desc: "上传线框图、截图、PNG/JPG，让 Make 按素材生成。" },
                        { title: "借用他人模板", tag: "Template", desc: "从示例 Dashboard、表单、组件模板开始二次修改。" },
                      ].map(item => (
                        <div key={item.title} className="rounded-xl border border-border bg-background p-3">
                          <div className="flex items-center justify-between gap-3 mb-1">
                            <span className="font-bold text-sm text-foreground">{item.title}</span>
                            <span className="text-[9px] bg-primary/10 text-primary px-1.5 py-0.5 rounded uppercase font-bold">{item.tag}</span>
                          </div>
                          <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 z-10">
                <span className="text-xs font-bold">3</span>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <h4 className="font-bold text-lg text-foreground mb-3">Step 3｜优化与协作，确认原型方向</h4>

                <div className="grid grid-cols-1 xl:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.1fr)] gap-5 items-start">
                  <div className="bg-muted/40 p-2 rounded-xl border border-border/50 min-w-0">
                    <ZoomableImage src={figmaMakePublishImage} alt="Figma Make Publish 和 Share 入口示意图" />
                  </div>

                  <div className="grid grid-cols-1 gap-2">
                    <div className="flex gap-2.5 p-3 rounded-lg border border-border bg-background">
                      <IterationCcw className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-foreground">多轮迭代修改</h5>
                        <p className="text-xs text-muted-foreground mt-1">生成初稿后，可以继续通过自然语言修改不满意的部分，也可以手动修改颜色、边距。</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 p-3 rounded-lg border border-border bg-background">
                      <MessageSquare className="w-5 h-5 text-indigo-500 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-foreground">团队协作</h5>
                        <p className="text-xs text-muted-foreground mt-1">通过 Share 生成链接发送给团队成员，支持评论、评审和共同修改。</p>
                      </div>
                    </div>
                    <div className="flex gap-2.5 p-3 rounded-lg border border-border bg-background">
                      <Rocket className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-sm font-bold text-foreground">预览分享</h5>
                        <p className="text-xs text-muted-foreground mt-1">通过 Publish 或 Share 快速生成演示入口，先让团队看到原型效果。</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 z-10">
                <span className="text-xs font-bold">4</span>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <h4 className="font-bold text-lg text-foreground mb-2">Step 4｜判断交付方式：静态发布，还是继续开发</h4>
                <p className="text-sm text-muted-foreground mb-4">前端页面确认后，先判断 Demo 的交付深度。只需要展示静态界面，就可以直接发布；需要后端、数据和业务逻辑，就把项目交给 AI Code 继续搭建。</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="rounded-xl border border-emerald-100 bg-emerald-50 p-4">
                    <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm mb-1">
                      <Globe className="w-4 h-4" /> 静态 Demo
                    </div>
                    <p className="text-xs text-emerald-900/70 leading-relaxed">如果只是页面展示，可以用 Figma Publish、GitHub Pages、Vercel 或其他静态托管直接上线。</p>
                  </div>
                  <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
                    <div className="flex items-center gap-2 text-primary font-bold text-sm mb-1">
                      <Code2 className="w-4 h-4" /> 继续工程化
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">如果要接 API、做登录、存数据或业务流程，可以把前端项目拖进 Codex 继续搭建。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 z-10">
                <span className="text-xs font-bold">5</span>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <div className="grid grid-cols-1 xl:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.1fr)] gap-5 items-start">
                  <div className="bg-muted/40 p-2 rounded-xl border border-border/50 min-w-0">
                    <ZoomableImage src={codexRebuildImage} alt="把 Figma Make 导出的代码交给 Codex 复现前端" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-lg text-foreground mb-2">Step 5｜用 Codex 复现可运行前端</h4>
                    <p className="text-sm text-muted-foreground mb-4">把 Figma Make 导出的代码和 zip 文件交给 Codex，让它先审查项目结构，再修复依赖、路径、样式和交互，复现成可本地运行的前端项目。</p>
                    <div className="grid grid-cols-1 gap-2">
                      {["完整读取项目代码", "修复运行和资源问题", "尽量还原页面视觉与交互"].map(item => (
                        <div key={item} className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 text-xs text-muted-foreground">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 z-10">
                <span className="text-xs font-bold">6</span>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <div className="grid grid-cols-1 xl:grid-cols-[minmax(360px,0.9fr)_minmax(0,1.1fr)] gap-5 items-start">
                  <div className="bg-muted/40 p-2 rounded-xl border border-border/50 min-w-0">
                    <ZoomableImage src={mcpSetupImage} alt="Codex 连接 Figma MCP 服务器界面" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-lg text-foreground mb-2">Step 6｜连接 Figma MCP，同步设计上下文</h4>
                    <p className="text-sm text-muted-foreground mb-4">在 Codex 中接入 Figma MCP 后，Figma 页面结构、组件、样式和截图都能变成 AI Code 的上下文。设计侧继续编辑，代码侧就可以按新的设计要求同步调整。</p>
                    <div className="rounded-xl border border-primary/15 bg-primary/5 p-4 text-xs text-muted-foreground leading-relaxed">
                      推荐用法：先在 Figma 中改页面，再让 Codex 读取对应节点上下文，最后同步修改本地前端代码。
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -left-10 top-4 flex items-center justify-center w-8 h-8 rounded-full border-4 border-background bg-slate-200 dark:bg-slate-800 text-slate-500 shadow shrink-0 z-10">
                <span className="text-xs font-bold">7</span>
              </div>
              <div className="p-5 rounded-2xl bg-card border border-border shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-5 items-center">
                  <div>
                    <h4 className="font-bold text-lg text-foreground mb-2">Step 7｜按需搭建后端，最后发布 Demo</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">前端完成后，如果要做真实业务，可以继续让 Codex 搭建后端、数据库、接口和权限。但多数产品 Demo 只需要展示流程与界面，不一定要接真实数据。确认演示目标后，发布出去，一个可看的 Demo 就落地了。</p>
                  </div>
                  <div className="flex items-center gap-2 rounded-full bg-emerald-50 border border-emerald-100 px-4 py-2 text-sm font-bold text-emerald-600">
                    <Rocket className="w-4 h-4" /> Demo Ready
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

// 9. Pipeline
function Pipeline() {
  const steps = [
    { icon: Lightbulb, title: "业务想法", tag: "Idea", in: "一句话需求", out: "业务痛点", desc: "明确目标用户、核心问题和这次原型要验证的假设。" },
    { icon: Cpu, title: "产品共创", tag: "Product Thinking", in: "业务痛点", out: "产品方案", desc: "用 GPT / Gemini 梳理功能结构、页面范围和关键状态。" },
    { icon: Terminal, title: "Figma Prompt", tag: "Design Prompt", in: "产品方案", out: "Make Prompt", desc: "把功能、布局、视觉风格和交互状态转成 Figma Make 指令。" },
    { icon: LayoutTemplate, title: "Figma Make", tag: "Visual Prototype", in: "Make Prompt", out: "高保真页面", desc: "基于文字、线框、组件或图片生成真实 Web App 感的原型。" },
    { icon: Share2, title: "MCP 同步", tag: "Design Context", in: "高保真页面", out: "设计上下文", desc: "把页面结构、样式和组件关系传给 AI Code 工具。" },
    { icon: Code2, title: "Codex 复现", tag: "Code Prototype", in: "设计上下文", out: "可运行代码", desc: "复现前端页面，修复路径、样式、滚动和交互问题。" },
    { icon: UserCircle, title: "人工验收", tag: "Human Review", in: "可运行代码", out: "可交付版本", desc: "检查业务目标、页面还原度、交互闭环和安全边界。" }
  ];

  return (
    <section id="pipeline" className="py-16 px-6 lg:px-8 bg-slate-50 relative border-t border-border flex-1 min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.05)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60"></div>
      <div className="absolute -top-40 right-0 w-[34rem] h-[34rem] bg-primary/10 blur-3xl rounded-full"></div>
      
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">AI 原型生产流水线</h2>
            <p className="text-muted-foreground text-lg max-w-3xl">从一句业务想法，到一个可展示、可复现、可交付的前端工具。</p>
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur border border-border rounded-3xl shadow-sm overflow-hidden">
          <div className="p-6 lg:p-8">
            <div className="relative overflow-x-auto custom-scrollbar">
              <div className="relative min-w-[1120px] h-[480px]">
                <div className="absolute left-10 right-10 top-1/2 h-px bg-slate-300"></div>
                <div className="absolute left-10 right-10 top-1/2 h-px bg-gradient-to-r from-sky-500 via-primary to-emerald-500"></div>

                <div className="relative grid grid-cols-7 gap-4 h-full">
                  {steps.map((step, index) => (
                    <div key={step.title} className="relative h-full group">
                      <div className={cn(
                        "absolute left-1/2 -translate-x-1/2 w-px bg-primary/25",
                        index % 2 === 0 ? "top-[150px] h-[80px]" : "top-[230px] h-[80px]"
                      )}></div>

                      <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                        <div className="w-9 h-9 rounded-full bg-white border border-primary/30 shadow-sm flex items-center justify-center">
                          <div className="w-4.5 h-4.5 rounded-full bg-primary text-white text-[10px] font-black flex items-center justify-center">
                            {index + 1}
                          </div>
                        </div>
                      </div>

                      <div className={cn(
                        "absolute -left-2 -right-2 rounded-2xl border border-border bg-white p-3 shadow-sm hover:border-primary/30 hover:shadow-md transition-all",
                        index % 2 === 0 ? "top-0" : "bottom-0"
                      )}>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                            <step.icon className="w-4 h-4" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-bold text-foreground leading-tight text-sm">{step.title}</h3>
                          </div>
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-relaxed min-h-10">{step.desc}</p>
                        <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-start gap-1.5 text-[10px] font-semibold">
                          <span className="text-slate-500 leading-snug break-words">{step.in}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                          <span className="text-emerald-600 leading-snug break-words">{step.out}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// 11. Safety Checklist
function SafetyChecklist() {
  const blockedItems = [
    "API Key / Token / 密钥",
    "客户手机号、身份证、邮箱、地址等个人信息",
    "未脱敏的订单、交易、支付数据",
    "公司内部未公开文档",
    "业务核心策略、未发布活动方案、商业机密",
    "账号密码、Cookie、Session、数据库连接串",
    "生产环境日志中的敏感字段",
  ];

  const safeActions = [
    { title: "先脱敏", desc: "替换真实姓名、账号、订单号和金额，只保留业务结构。" },
    { title: "用 Mock 数据", desc: "用样例字段和虚拟值表达场景，不传生产明细。" },
    { title: "最小必要信息", desc: "只给 AI 完成任务必须知道的上下文。" },
    { title: "人工复核", desc: "代码、SQL、规则和结论都需要人确认后再使用。" },
  ];

  const auditItems = [
    "确认未包含真实用户信息",
    "确认未包含密钥 / Token / Cookie",
    "确认未包含未公开业务策略",
    "确认样例数据已经脱敏或 Mock",
    "确认 AI 输出需要人工复核",
  ];

  return (
    <section id="safety" className="py-16 px-6 lg:px-8 bg-slate-50 border-t border-border">
      <div className="max-w-6xl mx-auto text-left">
        <div className="mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">AI 安全红线</h2>
          <p className="text-muted-foreground text-lg max-w-2xl">AI 可以帮你提效，但任何提交前都要先完成脱敏、最小化和人工复核判断。</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-6 mb-6">
          <div className="rounded-3xl bg-white border border-border p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <h3 className="font-bold text-foreground text-xl">不要直接提交给 AI</h3>
                <p className="text-sm text-muted-foreground mt-1">这些内容应该删除、替换或脱敏后再进入 Prompt。</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                <Lock className="w-6 h-6" />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-2">
              {blockedItems.map(item => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-red-100 bg-red-50/70 px-4 py-3 text-sm font-semibold text-red-800">
                  <X className="w-4 h-4 text-red-500 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white border border-border p-6 shadow-sm">
            <div className="flex items-center justify-between gap-4 mb-5">
              <div>
                <h3 className="font-bold text-xl text-foreground">提交前处理流程</h3>
                <p className="text-sm text-muted-foreground mt-1">不是“包含才通过”，而是确认敏感信息已经被处理掉。</p>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                <AlertTriangle className="w-6 h-6" />
              </div>
            </div>

            <div className="space-y-3">
              {safeActions.map((item, index) => (
                <div key={item.title} className="flex gap-3 rounded-2xl border border-emerald-100 bg-emerald-50/60 p-4">
                  <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-emerald-900">{item.title}</div>
                    <p className="text-xs text-emerald-900/65 mt-1 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-3xl bg-white border border-border p-6 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-3 mb-5">
            <div>
              <h3 className="font-bold text-xl text-foreground">提交给 AI 前的 5 秒自检</h3>
              <p className="text-sm text-muted-foreground mt-1">勾选代表“已经排除风险”，不是要求 Prompt 包含这些信息。</p>
            </div>
            <div className="text-xs font-semibold text-primary bg-primary/5 border border-primary/10 rounded-full px-3 py-1">
              SAFE TO SEND CHECK
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-3">
            {auditItems.map((q) => (
              <label key={q} className="min-h-28 flex flex-col justify-between gap-4 rounded-2xl border border-border bg-slate-50 p-4 cursor-pointer hover:border-primary/30 hover:bg-primary/[0.03] transition-colors">
                <input type="checkbox" className="w-5 h-5 rounded border-slate-300 text-emerald-500 focus:ring-emerald-500/30 accent-emerald-500" />
                <span className="text-sm font-semibold text-slate-700 leading-snug">{q}</span>
              </label>
            ))}
          </div>

          <div className="mt-5 rounded-2xl border border-amber-100 bg-amber-50 px-4 py-3 text-sm text-amber-900/80 flex gap-3">
            <Info className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <span>如果任意一项无法确认，就先回到材料里删除敏感字段、改成 Mock 数据，或只描述抽象业务场景。</span>
          </div>
        </div>
      </div>
    </section>
  );
}

// 12. Skill Tree
function SkillTree() {
  const levels = [
    {
      level: "Level 1", title: "业务通用层", 
      skills: [{n: "写 Prompt", s: true}, {n: "拆业务问题", s: true}, {n: "判断 AI 结果", s: true}, {n: "沉淀工作流", s: true}]
    },
    {
      level: "Level 2", title: "产品进阶层", 
      skills: [{n: "Figma Make 做原型", s: true}, {n: "Codex 复现页面", s: true}, {n: "接入 AI API", s: false}, {n: "部署可访问网页", s: false}]
    },
    {
      level: "Level 3", title: "工程化层", 
      skills: [{n: "GitHub 版本管理", s: false}, {n: "数据库存储", s: false}, {n: "后端接口", s: false}, {n: "MCP / Skill", s: false}, {n: "模型成本评估", s: false}]
    }
  ];

  return (
    <section id="skill" className="py-16 px-8 bg-slate-50 border-t border-border">
      <div className="max-w-6xl mx-auto text-left">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">从会用 AI，到会设计 AI 工具</h2>
          <p className="text-muted-foreground text-lg">Skill Tree 进阶路线</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 space-y-12 relative">
            <div className="absolute left-6 top-8 bottom-8 w-1 bg-border rounded-full z-0"></div>

            {levels.map((lvl, i) => (
              <div key={i} className="relative z-10 flex gap-6">
                <div className={cn("w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 shadow-sm border-4 border-slate-50", i < 2 ? "bg-primary text-white" : "bg-muted text-muted-foreground")}>
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="mb-4">
                    <span className={cn("text-xs font-bold uppercase tracking-wider", i < 2 ? "text-primary" : "text-muted-foreground")}>{lvl.level}</span>
                    <h3 className="text-xl font-bold text-foreground">{lvl.title}</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {lvl.skills.map((skill, j) => (
                      <div key={j} className={cn("px-4 py-3 rounded-lg border text-sm text-center font-medium transition-all", skill.s ? "bg-white border-primary/30 text-primary shadow-sm ring-1 ring-primary/10" : "bg-muted/50 border-border text-muted-foreground opacity-70")}>
                        {skill.n}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-80 shrink-0">
            <div className="bg-white border border-border p-6 rounded-2xl shadow-sm sticky top-24">
              <h4 className="font-bold text-foreground mb-4">学习指南</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                今天重点讲 <strong className="text-foreground">Level 1</strong> 和 <strong className="text-foreground">Level 2</strong>。
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Level 3 属于后续工程化进阶，不在 30 分钟内展开。可以随着实际工具开发需求逐步解锁。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// 13. Footer CTA
function FooterCTA() {
  const paths = [
    { title: "普通 AI 使用者", desc: "会问问题", active: false },
    { title: "进阶 AI 使用者", desc: "会写 Prompt", active: false },
    { title: "产品型 AI 使用者", desc: "会设计工作流", active: false },
    { title: "工具型 AI 使用者", desc: "会把工作流做成工具，让团队复用", active: true }
  ];

  return (
    <section className="py-20 px-6 lg:px-8 bg-slate-50 text-center relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(79,70,229,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(79,70,229,0.04)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">下一步，不是多问 AI 几次</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          而是把高频工作做成可复用工具。
        </p>
        <p className="text-muted-foreground text-sm max-w-3xl mx-auto mb-14 leading-relaxed">
          AI 提效的核心，不是生成更多内容，而是把模糊业务问题拆成结构化流程，再把流程沉淀成团队可以复用的工具。
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {paths.map((p, i) => (
            <div key={i} className={cn(
              "p-6 rounded-2xl border text-left flex flex-col justify-center transition-transform hover:-translate-y-1 bg-white shadow-sm",
              p.active ? "border-primary/30 ring-1 ring-primary/10 shadow-md shadow-primary/10" : "border-border"
            )}>
              <div className={cn("text-xs font-bold uppercase tracking-wider mb-2", p.active ? "text-primary" : "text-muted-foreground")}>Stage {i+1}</div>
              <h4 className={cn("font-bold mb-1 text-foreground", p.active ? "text-xl" : "text-lg")}>{p.title}</h4>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-2xl font-bold text-foreground bg-white inline-block px-8 py-4 rounded-2xl border border-border shadow-sm">
          从会用 AI，到 <span className="text-primary">会设计 AI 工作流</span>。
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState('hero');
  const [isSidebarOpen, setIsSidebarOpen] = useState(() => typeof window === 'undefined' ? true : window.innerWidth >= 768);
  const tabLabels: Record<string, string> = {
    hero: '工作台总览',
    provider: 'AI 接入中心',
    pipeline: '原型流水线',
    clinic: 'Prompt 设计',
    figmamake: '前端搭建落地',
    safety: '安全红线',
    skill: '进阶路线',
  };

  return (
    <div className="min-h-screen bg-background font-sans text-foreground flex overflow-hidden">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isOpen={isSidebarOpen} />
      <div className={cn(
        "flex-1 flex flex-col relative min-w-0 h-screen transition-all duration-300 ease-in-out",
        isSidebarOpen ? "md:ml-48 md:w-[calc(100%-12rem)]" : "ml-0 w-full"
      )}>
        <Header isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} currentLabel={tabLabels[activeTab] ?? '工作台总览'} />
        <main key={activeTab} className="flex-1 w-full overflow-y-auto custom-scrollbar animate-in fade-in duration-300 relative">
          {activeTab === 'hero' && (
            <>
              <Hero />
              <VibeExamples />
              <WorkflowOverview setActiveTab={setActiveTab} />
            </>
          )}
          {activeTab === 'provider' && (
            <>
              <ProviderHub />
              <SetupWizard />
              <Troubleshooting />
            </>
          )}
          {activeTab === 'pipeline' && <Pipeline />}
          {activeTab === 'figmamake' && <FigmaMakeWorkflow />}
          {activeTab === 'clinic' && <PromptRefactorSuite />}
          {activeTab === 'safety' && <SafetyChecklist />}
          {activeTab === 'skill' && (
            <>
              <SkillTree />
              <FooterCTA />
            </>
          )}
        </main>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.8);
        }
      `}} />
    </div>
  );
}
