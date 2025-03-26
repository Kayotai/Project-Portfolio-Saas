Arquitetura de Software

O objetivo desse projeto é criar um site que chame a atenção, passe a sensação de "tecnologia".

Sobre o que é o projeto: Um site de empreendedorismo, uma landing page que venda um SaaS.

Cores do site:
Cor Principal (Azul): #1c2432
Cor Secundária (Cinza Claro): #F5F5F5
Cor de Ação (Verde Limão): #253554
Cor de Acento (Laranja): #007a42
Cor de Fundo (Branco): #FFFFFF
Cor de Texto (Cinza Escuro): #131212

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
  - Subheadline (section/article): //Capturar a atenção do visitante
    - Pergunta (interativo) 
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
- Javascript (F:Node)
- HTML
- CSS

Back-end:
- Node
- Javascript
- MySQL


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

segurança usando javascript:
- Não use inner.html

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

Criação dos fluxogramas: //Feito em HTML, salvo do google drive
Drawio

CSS anotações:

//Geral
.container parallax - Ele é a classe do main e é responsável por armazenar as sections. Os comandos que ele recebe são apenas para dizer que
ele ocupa 100% da largura DÍSPONIVEL, que a posição dele é relativa para controlar o Sticky do parallax, scroll-snap-type diz que só pode rolar
para o eixo y e que ele permanece ou na próxima section ou na anterior.
.parallax - O scroll sempre tenta se alinhar no start, o sticky é o responsável por grudar as sections no topo da tela. Somente as sections possuem.

Eu defini que o minimo de altura do footer, main, header e sections é 100vh.

Todos os links tem suas decorações padrões retiradas.

//Header
Header - O background não pode ser repetido, a imagem se esconde caso não consiga aparecer inteiramente, posição top center.
background-attachment faz o efeito parallax, mantendo ele fixo no HTML. Display faz uma coluna entre as 2 divs, a dos links e a da logo.

.logo icon - Se trata das configurações da logo que é 100% CSS. Clip-path cria um polygono, eu defino uma altura e largura, depois crio 
um background maior que o tamanho da div. Uma animação é executada indo de um lado a outro dentro da div(12s), animação infinita.

.content--header - os comandos que ele recebe são apenas de alinhar os links, centralizar na nav e que o tamanho é 100% do espaço dísponivel, com altura de 20%. Tem uma background leve e com alpha diminuido

.__nav__ - uma pequena margin para desgrudar das bordas do html, um flex que coloca os links lado a lado, um space-evelyn que usa todo o espaço disponível para a distribuição dos links e um alinhamento vertical.

.__nav__ > a - cursor sempre vai ser pointer para os links na nav, aumentando a fonte e o bold. Uma transição para deixar as letras coloridas.

.__nav__ > a:hover - defino um gradiente linear igual ao da logo, dou um clip para deixar somente no texto (webkit é para adaptar para alguns navegadores), cor transparente para mostrar o background. Defino a 
mesma animação da logo, defino um tamanho para o background, assim a animação ocorre normalmente. A fonte aumenta de tamanho e dou um bold de 100%.

.content-big-title - Defino uma altura para div. Uso display flex e centralizo tudo. 

.big--logotipo--h1 - Aumenta o tamanho do h1, cursor default (estava aparecendo um | de digitação), espaçamento de letras, cria uma borda right para simular o |. A h1 ocupa toda a largura disponível. O texto não se quebra,
o texto se esconde caso não tenha espaço e tem uma animação para surgir.

//Subheadline

.subheadline - Altera a cor de fundo.

.objection - Aumenta a altura para 100% da tela

.question-container - Diz que o comportamento vai ser de coluna e que o mínimo de tela é 100vh.

.question-container, .objection - alinhando ambos.

#question - posição relativa para prender o absolute, aumento de fonte, cor de fonte e margem bottom. 

#question::before - Mostrando o texto do data-text e com posição absoluta, largura de 200px, linear gradiente preso no texto. Dizendo que se meu texto não caber ele vai se esconder.
a borda simula o |. Animação linear e infinita(effectletter).

.container-options - dizendo que minhas opções de respostas vão ficar lado a lado. Dando uma distancia a mais entre as opções.

label - cursor é pointer, deixando as opções lado a lado. Alinhamento central e um gap de 10px.

input[type="radio"] - dizendo para os input radio não aparecerem.

.toggle-label - aumentando a fonte, dando um bold, enfeitando o cursor, uma posição relativa

.toggle-label::after - Mostrando o texto do data-text, aumentando a fonte, dizendo para pegar a cor do pai.

#no:checked + .toggle-label::after - Se for marcado, mostro o emoji (alterando o content colocado no .toggle-label::after). Mudando a cor e arrumando o tamanho.

#yes:checked + .toggle-label::after - Se for marcado, mostro o emoji (alterando o content colocado no .toggle-label::after). Mudando a cor e arrumando o tamanho.

.solution - Alinhamento e ficando em coluna, mudando a cor do background

.solution > h2 - fonte aumentada, cor das letras (cor2).

.solution > p - fontes aumentadas, aumentando o espaço entre as letras, margem para ajustar o texto, cor alterada.


CSS - Animações:

