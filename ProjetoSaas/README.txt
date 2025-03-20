Arquitetura de Software

O objetivo desse projeto é criar um site que chame a atenção, passe a sensação de "tecnologia".

Sobre o que é o projeto: Um site de empreendedorismo, uma landing page que venda um SaaS.

Cores do site:
Cor Principal (Azul): #007BFF
Cor Secundária (Cinza Claro): #F5F5F5
Cor de Ação (Verde Limão): #00C853
Cor de Acento (Laranja): #FF7043
Cor de Fundo (Branco): #FFFFFF
Cor de Texto (Cinza Escuro): #333333

fontes do site:
Poppins 
Inter

logo:
criada com css

favicon: 
Flaticon

Estrutura(Base):

- Header:  
  - .content--header [Logo, Menu/Nav (sobre, contatos, planos)]
  - .big--logo--h1 [Big logo]

- Main:
  - Subheadline (section/article): //Capturar imediatamente a atenção do visitante
    - Perguntando o problema (interativo) 
    - Buttons (Sim e Não)
  - Section > Article:  //Apresentação do produto
    - h  //Apresentar os serviços
    - p  // //Proposta de valor.Especificidade sobre o serviço, como ele resolve o problema de forma única
    - video (Vsl)
  - Section > Article: //Prova social
    - Barra de seleção de provas sociais
    - Uma chamada para fazer login
  - Section > Article:  //Beneficios, cards do serviço prestado //CTA
    - Card Junior
    - Card Alpha
    - Card Burgues
  - Section:
    - p //Reforço de confiança no produto
- Footer: //Informações necessarias
  - Twitter
  - Instagram do criador
  - Dowload do Read.me
  - Suporte
  - Atribuição do favicon
  - &copy

Front-end:
- Javascript (F:React)
- HTML
- CSS

Back-end:
- Django
- Python 


palavras chaves:
  - geral:
Inteligência Artificial para Negócios
Consultoria Inteligente de IA
Soluções de IA para Empreendedores
Transformação Digital para Empreendedores
Tecnologia para Negócios
Automação de Decisões Empresariais
Empreendedorismo Inteligente
IA para Crescimento Empresarial
Ferramentas de IA para Startups
Soluções Inovadoras com IA
  - bolsa de valores/mercado financeiro:
Inteligência Artificial na Bolsa de Valores
Análise de Mercado com IA
IA para Investimentos Inteligentes
Algoritmos para Trading
Investimentos Automatizados
Consultoria de Investimentos com IA
Previsão de Mercado com IA
Análise Financeira Automática
Gestão de Portfólio com IA
Estratégias de Investimento Inteligente
  - educação financeira:
Educação Financeira Personalizada com IA
Treinamento Financeiro com Inteligência Artificial
IA para Planejamento Financeiro
Consultoria Financeira Inteligente
Aulas de Educação Financeira com IA
Finanças Pessoais Automatizadas
Gestão de Finanças Empresariais com IA
Ferramentas Educacionais para Investidores
Capacitação em Investimentos com IA
Cursos de Educação Financeira com IA
  - enfatizando inovação:
Tecnologia Disruptiva para Empreendedores
Soluções de IA para Inovação Empresarial
Transformação Digital no Empreendedorismo
Empreendedorismo 4.0
Sistemas Inteligentes para Negócios
Inteligência Artificial para Inovação
Automação de Processos Empresariais com IA
IA para Otimização de Negócios
Empreendedorismo Inteligente com Tecnologia
Consultoria e Ferramentas Inteligentes
  - resultados e beneficios:
Maximize Lucros com IA
Investimentos mais Inteligentes
Análise Rápida de Mercado
Reduza Riscos com IA
Previsões de Mercado Mais Precisos
Aumente a Rentabilidade com IA
Tomada de Decisão Rápida com IA
Aprimore Suas Finanças com Inteligência Artificial
Resultados de Investimento Inteligente
Estratégias de Negócio Baseadas em IA
  - usabilidade e acesso:
Plataforma de IA para Empreendedores
Acesso fácil a Investimentos com IA
Ferramentas de IA para Análise Financeira
Plataforma de Consultoria Financeira Online
Serviços de IA para Negócios
Interface Simples para Investir com IA
Análise Inteligente de Mercado em Tempo Real
Consultoria de Investimentos ao Vivo
Educação Financeira Interativa com IA
Plataforma Inteligente para Planejamento Financeiro

site dos sons:
freesound
zapsplat
soundbible
freesoundeffects
bensound
audioblocks

site das imagens:
unsplash //Licença permite uso em sites, desde que seja somente estilização


compreensão de imagens, mudança de formato: //Todas as imagens foram comprimidas e reformatadas, para identificar se alguma não foi, basta ver se essa imagem tem um "p" no final de seu nome. Se não tiver, não foi comprimida
Squoosh //Todas imagens são webp

site de remoção de css não utilizado:
purgecss
uncss

segurança usando HTML:
- onclick não vai ocorrer no html, esses eventos são adicionados somente no javascript.
- uso do Content Security
- Uso do noopener para impedir que a página redirecionada pelo _Blank, manipule a original.
- noreferrer além de atuar semelhantemente ao moopener, além disso o atributo impede 
o site direcionado de saber a origem do site que redirecionou.


Segurança usando o servidor(Todos com 1 na frente estão sendo aplicados):
X-Frame-Options: DENY                 # Impede ataques de Clickjacking
X-XSS-Protection: 1; mode=block        # Ativa proteção contra XSS no navegador
X-Content-Type-Options: nosniff        # Bloqueia ataques de MIME sniffing
Referrer-Policy: no-referrer-when-downgrade  # Controla envio de referrer
Permissions-Policy: geolocation=(), microphone=() # Bloqueia acesso a recursos sensíveis


Anotações importantes do HTML: //Lembre de aplicar csrf nos formularios  //Restrição de uploads e inputs 
Problemas com leitura de código - Estou bloqueando de onde o site pode ler scripts, 'self' significa apenas o 
conteúdo daquele site e mais os links que eu forneci. Isso pode causar problemas com a falta de leitura de 
alguns scripts adicionados posteriormente // 19/03


CSS - Animações:
