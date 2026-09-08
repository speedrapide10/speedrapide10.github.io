export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 'ansible-fleet',
    title: 'Ansible Fleet Security',
    description: 'Automating the deployment of critical security patches and OS hardening policies across mixed RHEL and Debian environments using idempotent playbooks.',
    tags: ['Ansible', 'Security', 'RHEL'],
    icon: 'Code2',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    id: 'cloudflare-iac',
    title: 'Cloudflare IaC Security',
    description: 'Managing global edge security using Terraform to automate Cloudflare WAF rules, DNS zones, and Zero Trust access policies with version-controlled safety.',
    tags: ['Terraform', 'Cloudflare', 'IaC'],
    icon: 'Shield',
    color: 'bg-orange-500/10 text-orange-500'
  },
  {
    id: 'opnsense-virtual',
    title: 'OPNSense Virtual Security',
    description: 'Deploying and orchestrating OPNSense firewalls within Proxmox clusters to secure internal VM traffic and automate site-to-site VPN tunnels.',
    tags: ['OPNSense', 'Proxmox', 'Firewall'],
    icon: 'Lock',
    color: 'bg-green-500/10 text-green-500'
  },
  {
    id: 'portainer-forgejo-dr',
    title: 'Portainer & Forgejo Automated DR',
    description: 'Zero-touch backup, stack management, and disaster recovery scripts for Portainer version-controlled via self-hosted Forgejo Git, with embedded Mattermost notification webhooks in every script for real-time observability.',
    tags: ['Portainer', 'Forgejo', 'Mattermost', 'DR'],
    icon: 'Server',
    color: 'bg-purple-500/10 text-purple-500'
  }
];
