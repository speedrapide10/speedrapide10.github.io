export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'iac',
    title: 'IaC & Automation',
    icon: 'Terminal',
    color: 'text-blue-500',
    description: 'Terraform (Provisioning), Ansible (Server Config & Security Hardening), Portainer Stack Automation & Zero-Touch DR.'
  },
  {
    id: 'scripting',
    title: 'Advanced Scripting',
    icon: 'Cpu',
    color: 'text-orange-500',
    description: 'Expert-level Bash & Python scripts with embedded Mattermost webhook alerts for automated workflows and instant error visibility.'
  },
  {
    id: 'observability',
    title: 'Observability & Alerting',
    icon: 'Activity',
    color: 'text-green-500',
    description: 'Mattermost Webhooks Integration, Zabbix, Nagios Core, Prometheus, Grafana Dashboards, ELK Stack (Log Management).'
  },
  {
    id: 'os',
    title: 'OS & Self-Hosted VCS',
    icon: 'Layers',
    color: 'text-zinc-500 dark:text-zinc-400',
    description: 'RHEL, CentOS, Debian, Ubuntu, Windows Server AD, Self-Hosted Forgejo Git & GitHub.'
  },
  {
    id: 'networking',
    title: 'Networking',
    icon: 'Network',
    color: 'text-purple-500',
    description: 'Cisco IOS, MikroTik RouterOS, OPNSense Firewall, TCP/IP, VLAN Segmentation, VPN (WireGuard/OpenVPN).'
  },
  {
    id: 'security',
    title: 'Cyber Security',
    icon: 'Shield',
    color: 'text-red-500',
    description: 'Fortinet NSE standards, OPNSense Protection, SSH Hardening, SSL/TLS Lifecycle, Cloudflare WAF.'
  }
];
