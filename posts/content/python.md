# Python Programming - Quick Revision Notes 🐍

## Topics Covered
- Variables
- Data Types
- Operators
- Conditions
- Loops
- Functions
- Collections
- Strings
- OOPs
- Exceptions
- Modules
- File Handling

---

## 1. Python Important Facts
- Python is an interpreted, high-level programming language.
- Indentation defines code blocks.
- Everything in Python is an object.
- Lists are mutable, tuples are immutable.
- Dictionaries store key-value pairs.
- `==` checks value equality.
- `is` checks object identity.
- Python uses garbage collection.
- Functions are first-class objects.
- List comprehensions are faster and cleaner than many loops.
- Comments:
```python
# Single line comment

'''
Multi-line comment
'''
```

---

## 2. Variables & Data Types

```python
x = 10          # int
pi = 3.14       # float
name = "Alice" # str
flag = True     # bool
```

Common Data Types:

* `int`
* `float`
* `str`
* `bool`
* `list`
* `tuple`
* `set`
* `dict`
* `None`

Type Conversion:

```python
x = int("10")
y = float(5)
z = str(100)
```

---

## 3. Input & Output

```python
name = input("Enter name: ")
print("Hello", name)
```

Multiple Inputs:

```python
a, b = input().split()
```

---

## 4. Operators

Arithmetic:

```python
+, -, *, /, //, %, **
```

Comparison:

```python
==, !=, >, <, >=, <=
```

Logical:

```python
and, or, not
```

Membership:

```python
in, not in
```

Identity:

```python
is, is not
```

---

## 5. Conditional Statements

```python
if x > 0:
    print("Positive")
elif x == 0:
    print("Zero")
else:
    print("Negative")
```

---

## 6. Loops

### For Loop

```python
for i in range(5):
    print(i)
```

### While Loop

```python
while x > 0:
    x -= 1
```

Loop Controls:

```python
break
continue
pass
```

---

## 7. Functions

```python
def add(a, b):
    return a + b
```

Default Argument:

```python
def greet(name="Guest"):
    print(name)
```

Lambda Function:

```python
square = lambda x: x * x
```

---

## 8. Collections

| Data Structure | Mutability | Ordering | Example |
|----------------|------------|----------|---------|
| List | Mutable | Ordered | `nums = [1, 2, 3]`<br>`nums.append(4)` |
| Tuple | Immutable | Ordered | `point = (10, 20)` |
| Set | Mutable | Unordered | `s = {{1, 2, 3}}`<br>`myset = {"apple", "banana", "cherry"}` |
| Dictionary | Mutable | Ordered | `student = {{`<br>&nbsp;&nbsp;&nbsp;&nbsp;`"name": "John",`<br>&nbsp;&nbsp;&nbsp;&nbsp;`"age": 20`<br>`}}` |

---

## 9. String Operations

```python
s = "Python"
```

Slicing:

```python
s[0:3]      # 'Pyt'
s[::-1]     # 'nohtyP'
```

Useful Methods:

```python
s.upper()               # 'PYTHON'
s.lower()               # 'python'
s.strip()               # 'Python'      # removes leading/trailing whitespace
s.replace("Py", "My")   # 'Mython'
```

Formatted String:

```python
name = "Alice"
print(f"Hello {name}") # Hello Alice
```

---

## 10. List Comprehension

```python
squares = [x*x for x in range(5)]
```

Conditional:

```python
even = [x for x in range(10) if x % 2 == 0]
```

---

## 11. Recursion

```python
def factorial(n):
    if n == 1:
        return 1
    return n * factorial(n-1)
```

---

## 12. OOPs Concepts
Key Concepts:

* Encapsulation
* Inheritance
* Polymorphism
* Abstraction

### Class & Object
```python
class Car:
    def __init__(self, brand):
        self.brand = brand

# Create an object
car1 = Car("Toyota")

# Access attribute
car1.brand          # 'Toyota'

# Modify attribute
car1.brand = "Honda"
car1.brand          # 'Honda'
```

### Inheritance

```python
class Animal:
    def speak(self):
        return "Some sound"

class Dog(Animal):
    pass

dog = Dog()

dog.speak()         # 'Some sound'
```

### Encapsulation
```python
class BankAccount:
    def __init__(self, balance):
        self.__balance = balance   # private attribute

    def get_balance(self):
        return self.__balance

account = BankAccount(1000)

account.get_balance()     # 1000
# account.__balance       # AttributeError
```

### Polymorphism
```python
# ==== Compile Time Polymorphism ====
class Calculator:
    def multiply(self, a=1, b=1, *args):
        result = a * b
        for num in args:
            result *= num
        return result

# Create object
calc = Calculator()

# Using default arguments
print(calc.multiply())            
print(calc.multiply(4))           

# Using multiple arguments
print(calc.multiply(2, 3))       
print(calc.multiply(2, 3, 4))


# ==== Run Time Polymorphism ====
class Dog:
    def speak(self):
        return "Woof"

class Cat:
    def speak(self):
        return "Meow"

animals = [Dog(), Cat()]

for animal in animals:
    animal.speak()

# 'Woof'
# 'Meow'
```

### Abstraction
```python
# abc -> Abstract Based Classes
from abc import ABC, abstractmethod

class Shape(ABC):
    @abstractmethod
    def area(self):
        pass

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side

sq = Square(4)

sq.area()          # 16
```


---

## 13. Exception Handling

```python
try:
    x = 10 / 0
except ZeroDivisionError as e:
    print(f"Error: {e}")
finally:
    print("Done")
```

---

## 14. Modules

#### Create a Custom Module: **my_module.py**

```python
def greet(name):
    return f"Hello, {name}!"

pi = 3.14
```

#### Import Entire Module: **main.py**
```python
import my_module

my_module.greet("Alice")    # 'Hello, Alice!'
my_module.pi               # 3.14
```

#### Import with Alias

```python
import my_module as mm

mm.greet("David")          # 'Hello, David!'
```


---

## 15. File Handling

Write:

```python
with open("file.txt", "w") as f:
    f.write("Hello")
```

Read:

```python
with open("file.txt", "r") as f:
    print(f.read())
```

---

## 16. Useful Built-in Functions

```python
len()        # Returns the number of items in an object (string, list, tuple, etc.)
type()       # Returns the data type of a variable or object
range()      # Generates a sequence of numbers
sum()        # Returns the total sum of all items in an iterable
min()        # Returns the smallest value in an iterable
max()        # Returns the largest value in an iterable
sorted()     # Returns a new sorted list from an iterable
enumerate()  # Adds an index to each item while iterating
zip()        # Combines multiple iterables element by element
map()        # Applies a function to every item in an iterable
filter()     # Filters items based on a condition
```



