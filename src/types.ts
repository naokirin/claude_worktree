export interface WorktreeInfo {
  path: string;
  branch: string;
  head: string;
  bare?: boolean;
  detached?: boolean;
  locked?: boolean;
  prunable?: boolean;
}

export interface AgentSession {
  id: string;
  worktreePath: string;
  branch: string;
  status: 'running' | 'stopped' | 'error' | 'completed';
  startTime: Date;
  lastActivity?: Date;
}

export interface Config {
  defaultClaudeCommand?: string;
  maxConcurrentSessions?: number;
  sessionTimeout?: number;
  autoCleanup?: boolean;
}