# TRABALHANDO COM CONTANTES, CONDIÇÕES, REPETIÇÕES, INPUT, ETC

print()
print("TRABALHANDO COM CONTANTES, CONDIÇÕES, REPETIÇÕES, INPUT, ETC")
print()

VOGAIS = "AEIOU"
while True:
    nome = input("\n\n\ninforme seu primeiro nome: ")
    sobrenome = input("Agora seu sobrenome: ")
    idade = input("Sua idade: ")
    print(f"Seu nome é {nome} {sobrenome}, está com {idade} anos de idade")

    selecionar = input("Selecione uma opção:\n [1] Descobrir vogais do seu nome\n [2] Descobrir vogais do seu sobrenome \n\n ")
    print()

    if selecionar == "1":
        for letra in nome:
            if letra.upper() in VOGAIS:
                print(letra, end="")

    elif selecionar == "2":
        for letra in sobrenome:
            if letra.upper() in VOGAIS:
                print(letra, end="")

    else:
        print("Valor inválido")

    continuar = input("\n O que deseja?\n\t [1] Tentar de novo \n\t [2] Editar valor \n\t [3] Sair \n\n")

    if continuar == "1":
        continue

    elif continuar == "2":
        print("Estamos trabalhando nisso, selecionamos a opção de tentar de novo")
        continue

    elif continuar == "3":
        break
    else:
        print("Valor inválido, então entendemos que deseja sair. Tchau")
        break


# TRABALHANDO COM RANGE

print("\n\n\tIrei imprimir um range de números, obrigado\n")
for numero in range(0,11):
    print(numero, end=" ")


print("\n\n\tAgora a tabuada do 5\n")
for numero in range(0,51,5):
    print(numero, end=" ")


print()
print("TRABALHANDO COM STRINGS")
print()
# TRABALHANDO COM STRINGS

curso = "pYtHon"

print(curso.upper())
print(curso.lower())
print(curso.title())

print()
print("ELIMINANDO ESPAÇOS EM BRANCO")
print()
# ELIMINANDO ESPAÇOS EM BRANCO

curso_dois = "     Python  "

print(curso_dois.strip())
print(curso_dois.lstrip())
print(curso_dois.rstrip())

print()
print("JUNÇÕES E CENTRALIZAÇÕES")
print()
# JUNÇÕES E CENTRALIZAÇÕES

curso_tres = "Python"

print(curso_tres.center(10, "-"))
print(".".join(curso_tres))

print()
print("Método format")
print()

name = "Lucas" 
age = 18
lang = "pt-br"
city= "Sorocaba"

print("Olá, me chamo {}. Eu tenho {} anos de idade, minha linguagem é {}, moro na cidade de {}.".format(name,age,lang,city))

data= {"name":"Luquinha", "age":18, "lang":"língua potuguesa", "city":"Sorocaba"}

print("Olá, me chamo {name}. Eu tenho {age} anos de idade, minha linguagem é {lang}, moro na cidade de {city}.".format(**data))

print()
print("f-string")
print()

PI = 3.14159
print(f"valor de PI: {PI}")
print(f"valor de PI: {PI:.2f}")
print(f"valor de PI: {PI:10.2f}")

print()
print("fatiamento de string")
print()

fatiamento = "Lucas Dias Custodio da Silva"

print(fatiamento[0])
print(fatiamento[:5])
print(fatiamento[6:])
print(fatiamento[6:11])
print(fatiamento[0:28:2])
print(fatiamento[:])
print(fatiamento[::-1])

print()
print("String em múltiplas linhas")
print()

my_name = "Lucas"

print(f"""
Olá meu nome é {my_name}!
    Eu estou aprendendo Python
""")