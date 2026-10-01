---
id: "python-zh-function-turtle-turtle"
language: "python"
lang: "zh"
category: "function"
name: "turtle"
title: "How to configure Screen and Turtles"
directive: "module"
module: "turtle"
source_url: "https://docs.python.org/zh-cn/3/library/turtle.html#module-turtle"
license: "PSF"
updated: "2026-10-01"
---

# How to configure Screen and Turtles

.. _turtle-configuration:

**How to configure Screen and Turtles**

The built-in default configuration mimics the appearance and behaviour of the
old turtle module in order to retain best possible compatibility with it.

If you want to use a different configuration which better reflects the features
of this module or which better fits to your needs, e.g. for use in a classroom,
you can prepare a configuration file `turtle.cfg` which will be read at import
time and modify the configuration according to its settings.

内置的配置对应了下面的 ``turtle.cfg``:

```ini

width = 0.5
height = 0.75
leftright = None
topbottom = None
canvwidth = 400
canvheight = 300
mode = standard
colormode = 1.0
delay = 10
undobuffersize = 1000
shape = classic
pencolor = black
fillcolor = black
resizemode = noresize
visible = True
language = english
exampleturtle = turtle
examplescreen = screen
title = Python Turtle Graphics
using_IDLE = False
```

选定条目的简短说明:

- The first four lines correspond to the arguments of the `Screen.setup`
  method.
- Line 5 and 6 correspond to the arguments of the method
  `Screen.screensize`.
- *shape* can be any of the built-in shapes, e.g: arrow, turtle, etc.  For more
  info try `help(shape)`.
- If you want to use no fill color (i.e. make the turtle transparent), you have
  to write `fillcolor = ""` (but all nonempty strings must not have quotes in
  the cfg file).
- If you want to reflect the turtle its state, you have to use `resizemode =
  auto`.
- The *language* entry selects the language of the docstrings, unless the
  `PYTHON_TURTLE_LANG` environment variable is set. See
  `turtle-docstring-translation` for more information.
- The entries *exampleturtle* and *examplescreen* define the names of these
  objects as they occur in the docstrings.  The transformation of
  method-docstrings to function-docstrings will delete these names from the
  docstrings.
- *using_IDLE*: Set this to `True` if you regularly work with IDLE and its `-n`
  switch ("no subprocess").  This will prevent `exitonclick` to enter the
  mainloop.

There can be a `turtle.cfg` file in the directory where `turtle` is
stored and an additional one in the current working directory.  The latter will
override the settings of the first one.

The `Lib/turtledemo` directory contains a `turtle.cfg` file.  You can
study it as an example and see its effects when running the demos (preferably
not from within the demo-viewer).

.. _turtle-explanation:

**Explanation**

A turtle object draws on a screen object, and there a number of key classes in
the turtle object-oriented interface that can be used to create them and relate
them to each other.

A `Turtle` instance will automatically create a `Screen`
instance if one is not already present.

`Turtle` is a subclass of `RawTurtle`, which *doesn't* automatically
create a drawing surface - a *canvas* will need to be provided or created for
it. The *canvas* can be a `tkinter.Canvas`, `ScrolledCanvas`
or `TurtleScreen`.

`TurtleScreen` is the basic drawing surface for a
turtle. `Screen` is a subclass of `TurtleScreen`, and
includes `some additional methods` for managing its
appearance (including size and title) and behaviour. `TurtleScreen`'s
constructor needs a `tkinter.Canvas` or a
`ScrolledCanvas` as an argument.

The functional interface for turtle graphics uses the various methods of
`Turtle` and `TurtleScreen`/`Screen`. Behind the scenes, a screen
object is automatically created whenever a function derived from a `Screen`
method is called. Similarly, a turtle object is automatically created
whenever any of the functions derived from a Turtle method is called.

To use multiple turtles on a screen, the object-oriented interface must be
used.

**`turtledemo` --- Demo scripts**

The `turtledemo` package includes a set of demo scripts.  These
scripts can be run and viewed using the supplied demo viewer as follows::

   python -m turtledemo

此外，你也可以单独运行其中的演示脚本。例如，::

   python -m turtledemo.bytedesign

:mod:`!turtledemo` 包目录中包含：

- A demo viewer `__main__.py` which can be used to view the sourcecode
  of the scripts and run them at the same time.
- Multiple scripts demonstrating different features of the `turtle`
  module.  Examples can be accessed via the Examples menu.  They can also
  be run standalone.
- A `turtle.cfg` file which serves as an example of how to write
  and use such files.

演示脚本清单如下:

currentmodule:: turtle

+------------------------+------------------------------+--------------------------------------+
 Name                    Description                   Features                             
+========================+==============================+======================================+
 `bytedesign`          complex classical             `tracer`, `delay`,       
                         turtle graphics pattern       `update`                       
+------------------------+------------------------------+--------------------------------------+
 `chaos`               graphs Verhulst dynamics,     world coordinates                    
                         shows that computer's                                              
                         computations can generate                                          
                         results sometimes against the                                      
                         common sense expectations                                          
+------------------------+------------------------------+--------------------------------------+
 `clock`               analog clock showing time     turtles as clock's                   
                         of your computer              hands, `ontimer`               
+------------------------+------------------------------+--------------------------------------+
 `colormixer`          experiment with r, g, b       `ondrag`                       
+------------------------+------------------------------+--------------------------------------+
 `forest`              3 breadth-first trees         randomization                        
+------------------------+------------------------------+--------------------------------------+
 `fractalcurves`       Hilbert & Koch curves         recursion                            
+------------------------+------------------------------+--------------------------------------+
 `lindenmayer`         ethnomathematics              L-System                             
                         (indian kolams)                                                    
+------------------------+------------------------------+--------------------------------------+
 `minimal_hanoi`       Towers of Hanoi               Rectangular Turtles                  
                                                       as Hanoi discs                       
                                                       (`shape`, `shapesize`)   
+------------------------+------------------------------+--------------------------------------+
 `nim`                 play the classical nim game   turtles as nimsticks,                
                         with three heaps of sticks    event driven (mouse,                 
                         against the computer.         keyboard)                            
+------------------------+------------------------------+--------------------------------------+
 `paint`               super minimalistic            `onclick`                      
                         drawing program                                                    
+------------------------+------------------------------+--------------------------------------+
 `peace`               elementary                    turtle: appearance                   
                                                       and animation                        
+------------------------+------------------------------+--------------------------------------+
 `penrose`             aperiodic tiling with         `stamp`                        
                         kites and darts                                                    
+------------------------+------------------------------+--------------------------------------+
 `planet_and_moon`     simulation of                 compound shapes,                     
                         gravitational system          `Vec2D`                       
+------------------------+------------------------------+--------------------------------------+
 `rosette`             a pattern from the wikipedia  `clone`,                       
                         article on turtle graphics    `undo`                         
+------------------------+------------------------------+--------------------------------------+
 `round_dance`         dancing turtles rotating      compound shapes, `clone`       
                         pairwise in opposite          `shapesize`, `tilt`,     
                         direction                     `get_shapepoly`, `update`
+------------------------+------------------------------+--------------------------------------+
 `sorting_animate`     visual demonstration of       simple alignment,                    
                         different sorting methods     randomization                        
+------------------------+------------------------------+--------------------------------------+
 `tree`                a (graphical) breadth         `clone`                        
                         first tree (using generators)                                      
+------------------------+------------------------------+--------------------------------------+
 `two_canvases`        simple design                 turtles on two                       
                                                       canvases                             
+------------------------+------------------------------+--------------------------------------+
 `yinyang`             another elementary example    `circle`                       
+------------------------+------------------------------+--------------------------------------+

祝你玩得开心！

```python
:skipif: _tkinter is None
:hide:

>>> for turtle in turtles():
...      turtle.reset()
>>> turtle.penup()
>>> turtle.goto(-200,25)
>>> turtle.pendown()
>>> turtle.write("No one expects the Spanish Inquisition!",
...      font=("Arial", 20, "normal"))
>>> turtle.penup()
>>> turtle.goto(-100,-50)
>>> turtle.pendown()
>>> turtle.write("Our two chief Turtles are...",
...      font=("Arial", 16, "normal"))
>>> turtle.penup()
>>> turtle.goto(-450,-75)
>>> turtle.write(str(turtles()))
```
