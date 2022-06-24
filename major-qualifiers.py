from lib2to3.pgen2.token import NEWLINE


majors = {}

# functions
def compare():
    print("hello")
# MAIN FUNCTION
def main():
    with open('majors.txt') as f:
        lines = f.readlines()   # saves all the data in a list of strings

    for x in lines:
        print(x)

if __name__ == "__main__":
    main()