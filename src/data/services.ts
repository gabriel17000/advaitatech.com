export type ServiceCard = {
  id: string;
  title: string;
  description: string;
  details: string;
  highlight: string;
};

export const services: ServiceCard[] = [
  {
    id: 'web',
    title: 'Desenvolvimento Web',
    description: 'Interfaces corporativas com arquitetura escalável e experiência premium.',
    details: 'Construímos aplicações web modernas, com foco em performance, acessibilidade e manutenção de longo prazo. Ideal para plataformas que exigem estabilidade e alta conversão.',
    highlight: 'Front-end moderno + back-end robusto',
  },
  {
    id: 'custom',
    title: 'Sistemas sob medida',
    description: 'Soluções personalizadas para processos críticos que exigem precisão e custo inteligente.',
    details: 'Projetamos sistemas com modelagem clara, integrações modulares e entregas em ciclos ágeis para reduzir riscos e acelerar resultados.',
    highlight: 'Workflow adaptado à operação interna',
  },
  {
    id: 'api',
    title: 'APIs e Integrações',
    description: 'Conectamos plataformas e dados com APIs seguras e escaláveis.',
    details: 'Desenvolvemos APIs RESTful e GraphQL que unificam serviços, aceleram a troca de informações e simplificam a automação entre sistemas.',
    highlight: 'Dados consistentes e integrações seguras',
  },
  {
    id: 'cloud',
    title: 'Infraestrutura Cloud',
    description: 'Estrutura em nuvem preparada para alta disponibilidade e crescimento.',
    details: 'Oferecemos arquiteturas em nuvem com governança, monitoramento e custos controlados para ambientes em AWS, Azure e Google Cloud.',
    highlight: 'Resiliência e escalabilidade sob demanda',
  },
  {
    id: 'security',
    title: 'Segurança da Informação',
    description: 'Proteção avançada em cada camada: rede, aplicação e dados.',
    details: 'Implementamos controles de segurança desde o desenho da solução, com políticas, testes e monitoramento contínuo para reduzir vulnerabilidades.',
    highlight: 'Confiança operacional e compliance',
  },
  {
    id: 'automation',
    title: 'Automação de Processos',
    description: 'Rotinas inteligentes que reduzem retrabalho e aceleram decisões.',
    details: 'Automatizamos fluxos internos e digitais para garantir repetibilidade, agilidade e menos falhas em processos críticos.',
    highlight: 'Produtividade mais eficiente',
  },
];
