# factory_method_es2
Repositório para entrega do trabalho sobre factory method de Engenharia de Software II

O Factory Method é um padrão criacional de projeto que fornece uma interface para criar objetos em uma superclasse, mas permite que as subclasses alterem o tipo de objetos que serão criados.

Basicamente "factory" (fábrica) são operações que criam objetos

O padrão Factory Method sugere que você substitua chamadas diretas de construção de objetos (usando o operador new) por chamadas para sua Factory Method. Objetos retornados por um Factory Method geralmente são chamados de "products".

À primeira vista, essa mudança pode parecer inútil: movemos a chamada do construtor de uma parte do programa para outra. No entanto é importante considerar que agora você pode substituir o Factory Method em uma subclasse e alterar a classe de produtos que estão sendo criados pelo método.

Porém, há uma pequena limitação: as subclasses podem retornar tipos diferentes de produtos somente se esses produtos tiverem uma classe ou interface básica comum. Além disso, o Factory Method na classe base deve ter seu tipo de retorno declarado como essa interface.

Prós:

- Você evita um acoplamento rígido entre o criador e os produtos de concreto.

- Princípio de responsabilidade única (single responsability) . Você pode mover o código de criação do produto para um local do programa, facilitando o suporte ao código.

- Princípio Open/Closed . Você pode introduzir novos tipos de produtos no programa sem quebrar o código do cliente existente.

Contras:

- O código pode se tornar mais complicado, pois você precisa introduzir muitas subclasses novas para implementar o padrão. O melhor cenário é quando você está introduzindo o padrão em uma hierarquia existente de classes de criadores.


Link do vídeo explicativo: https://drive.google.com/file/d/1dC97XW_L11NyfdzRygh5Syj-w4KRZW3M/view?usp=sharing