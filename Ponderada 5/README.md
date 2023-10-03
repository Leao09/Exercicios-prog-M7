# Resenha ponderada 5

## Artigo 
[Machine learning for internet of things data analysis: a survey](https://www.sciencedirect.com/science/article/pii/S235286481730247X)

## sumarização

- [1.Introdução](#c1)
- [2.IOT](#c2)
- [3.Cidades Inteligentes](#c3)
- [4.Taxonomia de Algoritmos de ML](#c4)
- [5.Discussão sobre Taxonomia de Algoritmos de Aprendizado de Máquina](#c5)
- [6.Tendências de Pesquisa e Questões Abertas](#c6)
- [7.Conclusão](#c7)




## Introdução
A pesquisa é introduzida apresentando algumas contribuições e conceitos principais que serão abordados. A organização da pesquisa é descrita, com uma breve explicação de cada seção, que inclui revisão de literatura, explicação de aplicativos em cidades inteligentes e arquiteturas IoT, análise dos dados coletados por sensores e seu processamento com Big Data, modelos de machine learning e sua integração em cidades inteligentes, a integração desses aplicativos nas cidades inteligentes e, por fim, a conclusão e planos futuros para o desenvolvimento de novas tecnologias nessa área promissora da tecnologia.

## IoT
Na seção 3, discute-se como o desenvolvimento da IoT é realizado, abordando diferentes tipos de arquiteturas e como elas são utilizadas para garantir a sincronia entre sensores, atuadores e o armazenamento e processamento de dados. O principal ponto de convergência com o projeto é a utilização de serviços de nuvem para suportar a aplicação, juntamente com o armazenamento de dados coletados dos sensores da aeronave para o sistema de "bleed". Essa arquitetura é mencionada na pesquisa.

## Cidades Inteligentes
Nesta seção, explora-se como os modelos de cidades inteligentes são estudados e se tornam alvos de pesquisa para implementações de soluções em IoT. Também aborda-se como essas soluções podem ter impactos ambientais e sociais positivos se aplicadas corretamente para melhorar a qualidade de vida dos cidadãos. A pesquisa detalha os avanços e as soluções já utilizadas, bem como os desafios relacionados à gestão e ao uso eficaz dos dados produzidos pelos sensores de cidades inteligentes. Um paralelo com o projeto é a descrição do conceito de economia circular, que foi abordado durante o módulo. A implementação de uma solução de manutenção prescritiva pode otimizar o uso de matérias-primas, melhorar o planejamento logístico e aumentar a produtividade da empresa, contribuindo para o desenvolvimento econômico regional.

## Taxonomia de Algoritmos de ML
Nesta seção, são discutidos os diferentes tipos de algoritmos e modelos de machine learning, bem como o que é machine learning e os diferentes tipos de aprendizado de máquina existentes, suas aplicações e finalidades. Também são explicados outros algoritmos usados para superar as limitações dos modelos e melhorar a qualidade dos dados usados no treinamento e teste, incluindo o PCA, a clusterização K-means e outros. No projeto, foi utilizado um modelo de classificação chamado ETC (Extra Tree Classifier), que se assemelha ao modelo Random Forest descrito na pesquisa, mas possui diferenças fundamentais que influenciaram sua escolha e o desempenho dos resultados no treinamento e teste dos dados. A principal diferença é que o ETC utiliza resultados aleatórios das árvores de decisão e os combina para melhorar a acurácia, tornando-o mais aleatório que o Random Forest e evitando o overfitting. Outra estratégia importante utilizada no projeto, mas não mencionada na pesquisa, são os algoritmos de balanceamento de dados, como oversample e undersample, que foram fundamentais para um treinamento eficaz do modelo.

## Discussão sobre Taxonomia de Algoritmos de Aprendizado de Máquina
Esta seção é crucial, pois aborda como escolher os diferentes modelos e algoritmos de suporte apresentados e como usá-los para extrair informações de maneira eficiente dos dados. É enfatizado que todo o processo de tratamento de dados e seleção de features deve estar alinhado com um objetivo claro, garantindo que os algoritmos corretos sejam usados e métricas adequadas sejam aplicadas. Isso se aplica ao projeto, que envolveu análise exploratória para levantar hipóteses e mapear soluções para essas hipóteses, posteriormente comprovadas por testes que avaliaram o comportamento dos dados e o impacto do modelo.

## Tendências de Pesquisa e Questões Abertas
Na última seção, são discutidas questões relacionadas à segurança e privacidade dos dados coletados por aplicações IoT, bem como a importância de analisar e melhorar a qualidade dos dados para obter resultados úteis. A pesquisa traz à tona essas preocupações e destaca o papel fundamental dos modelos de ML na ajuda a resolver essas questões.

## Conclusão
Em conclusão, em relação ao projeto executado para a Azul, esta pesquisa fornece informações valiosas e levanta questões que devem ser abordadas antes e durante o desenvolvimento de soluções IoT que envolvem o tratamento de dados e a aplicação de ML. No entanto, a pesquisa aborda de maneira superficial aspectos mais holísticos do desenvolvimento de aplicações, como a viabilidade e o retorno sobre o investimento. Portanto, como recurso técnico e ampliação de conhecimento, essa pesquisa é excelente para descrever diferentes tipos de soluções usadas em problemas reais, mas é limitada em orientações específicas e informações complementares necessárias para a métrica de variáveis específicas em um projeto.