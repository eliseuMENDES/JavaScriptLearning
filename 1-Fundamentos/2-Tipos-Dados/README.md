# 📌 Tipos de Dados em JavaScript

Pasta dedicada ao estudo dos tipos de dados e suas particularidades.

## 🧩 Exemplos Disponíveis

### 0. `0-primitivos.js`
- **Conceito**: Tipos primitivos básicos
- **Métodos**:
  - `typeof`: Verificação de tipo
  - `toString()`: Conversão para string

### 1. `1-objetos.js`
- **Conceito**: Objetos literais
- **Métodos**:
  - `Object.keys()`: Lista propriedades
  - `JSON.stringify()`: Serialização

### 2. `2-arrays.js`
- **Conceito**: Manipulação de arrays
- **Métodos**:
  - `push()/pop()`: Pilha
  - `map()`: Transformação

[... continuar com todos os arquivos ...]

### 10. `10-bigint-weakmap.js`
- **Conceito**: Tipos avançados
- **Métodos**:
  - `BigInt`: Números grandes
  - `WeakMap`: Coleção fracamente referenciada

## 💡 Padrão de Nomenclatura

Cada arquivo segue o formato:
`[número]-[conceito].js`  
Ex: `5-const-objeto.js`

## 🚦 Fluxo de Aprendizado

1. Comece pelos exemplos básicos (0-3)
2. Pratique com os intermediários (4-7)
3. Explore os avançados (8-10)

## 🧪 Como Testar

```bash
# Executar exemplo específico
node 8-destructuring.js

# Executar todos os testes
npm test

📚 Recursos Adicionais

    MDN Data Types

    JavaScript.info


---

### Detalhes Adicionais:

1. **Para o README principal**:
   - Inclui seção de "Como Contribuir"
   - Badges de status (opcional)
   - Link para demonstração ao vivo (se aplicável)

2. **Para o README de Tipos-Dados**:
   - Tabela comparativa de tipos
   - Exemplo de cheatsheet
   - Link para exercícios complementares

3. **Versão estendida** pode incluir:
   ```markdown
   ## 🎯 Diagrama de Tipos

   ```mermaid
   graph TD
     A[Tipo] --> B[Primitivo]
     A --> C[Objeto]
     B --> D[number]
     B --> E[string]
     C --> F[Array]
     C --> G[Date]

🔄 Conversão entre Tipos
De/Para	Number	String	Boolean
0	0	"0"	false
"1"	1	"1"	true