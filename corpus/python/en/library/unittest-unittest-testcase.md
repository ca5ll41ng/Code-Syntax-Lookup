---
id: "python-en-function-unittest-testcase"
language: "python"
lang: "en"
category: "function"
name: "TestCase"
signature: "TestCase(methodName='runTest')"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/3/library/unittest.html#unittest.TestCase"
license: "PSF"
updated: "2026-10-01"
---

# TestCase

Instances of the `TestCase` class represent the logical test units
in the `unittest` universe.  This class is intended to be used as a base
class, with specific tests being implemented by concrete subclasses.  This class
implements the interface needed by the test runner to allow it to drive the
tests, and methods that the test code can use to check for and report various
kinds of failure.

Each instance of `TestCase` will run a single base method: the method
named *methodName*.
In most uses of `TestCase`, you will neither change
the *methodName* nor reimplement the default `runTest()` method.

> *Changed in 3.2*: :class:`TestCase` can be instantiated successfully without providing a *methodName*. This makes it easier to experiment with :class:`TestCase` from the interactive interpreter.

`TestCase` instances provide three groups of methods: one group used
to run the test, another used by the test implementation to check conditions
and report failures, and some inquiry methods allowing information about the
test itself to be gathered.

Methods in the first group (running the test) are:

method:: setUp()

method:: tearDown()

method:: setUpClass()

method:: tearDownClass()

method:: run(result=None)

method:: skipTest(reason)

method:: subTest(msg=None, **params)

method:: debug()

.. _assert-methods:

The `TestCase` class provides several assert methods to check for and
report failures.  The following table lists the most commonly used methods
(see the tables below for more assert methods):

+-----------------------------------------+-----------------------------+---------------+
 Method                                   Checks that                  New in        
+=========================================+=============================+===============+
 `assertEqual(a, b)                 `a == b`                                 
 <TestCase.assertEqual>`                                                             
+-----------------------------------------+-----------------------------+---------------+
 `assertNotEqual(a, b)              `a != b`                                 
 <TestCase.assertNotEqual>`                                                          
+-----------------------------------------+-----------------------------+---------------+
 `assertTrue(x)                     `bool(x) is True`                        
 <TestCase.assertTrue>`                                                              
+-----------------------------------------+-----------------------------+---------------+
 `assertFalse(x)                    `bool(x) is False`                       
 <TestCase.assertFalse>`                                                             
+-----------------------------------------+-----------------------------+---------------+
 `assertIs(a, b)                    `a is b`                   3.1           
 <TestCase.assertIs>`                                                                
+-----------------------------------------+-----------------------------+---------------+
 `assertIsNot(a, b)                 `a is not b`               3.1           
 <TestCase.assertIsNot>`                                                             
+-----------------------------------------+-----------------------------+---------------+
 `assertIsNone(x)                   `x is None`                3.1           
 <TestCase.assertIsNone>`                                                            
+-----------------------------------------+-----------------------------+---------------+
 `assertIsNotNone(x)                `x is not None`            3.1           
 <TestCase.assertIsNotNone>`                                                         
+-----------------------------------------+-----------------------------+---------------+
 `assertIn(a, b)                    `a in b`                   3.1           
 <TestCase.assertIn>`                                                                
+-----------------------------------------+-----------------------------+---------------+
 `assertNotIn(a, b)                 `a not in b`               3.1           
 <TestCase.assertNotIn>`                                                             
+-----------------------------------------+-----------------------------+---------------+
 `assertIsInstance(a, b)            `isinstance(a, b)`         3.2           
 <TestCase.assertIsInstance>`                                                        
+-----------------------------------------+-----------------------------+---------------+
 `assertNotIsInstance(a, b)         `not isinstance(a, b)`     3.2           
 <TestCase.assertNotIsInstance>`                                                     
+-----------------------------------------+-----------------------------+---------------+
 `assertIsSubclass(a, b)            `issubclass(a, b)`         3.14          
 <TestCase.assertIsSubclass>`                                                        
+-----------------------------------------+-----------------------------+---------------+
 `assertNotIsSubclass(a, b)         `not issubclass(a, b)`     3.14          
 <TestCase.assertNotIsSubclass>`                                                     
+-----------------------------------------+-----------------------------+---------------+

All the assert methods accept a *msg* argument that, if specified, is used
as the error message on failure (see also `longMessage`).
Note that the *msg* keyword argument can be passed to `assertRaises`,
`assertRaisesRegex`, `assertWarns`, `assertWarnsRegex`
only when they are used as a context manager.

method:: assertEqual(first, second, msg=None)

method:: assertNotEqual(first, second, msg=None)

method:: assertTrue(expr, msg=None)

method:: assertIs(first, second, msg=None)

method:: assertIsNone(expr, msg=None)

method:: assertIn(member, container, msg=None)

method:: assertIsInstance(obj, cls, msg=None)

method:: assertIsSubclass(cls, superclass, msg=None)

It is also possible to check the production of exceptions, warnings, and
log messages using the following methods:

+---------------------------------------------------------+--------------------------------------+------------+
 Method                                                   Checks that                           New in     
+=========================================================+======================================+============+
 `assertRaises(exc, fun, *args, **kwds)             `fun(*args, **kwds)` raises *exc*              
 <TestCase.assertRaises>`                                                                                  
+---------------------------------------------------------+--------------------------------------+------------+
 `assertRaisesRegex(exc, r, fun, *args, **kwds)     `fun(*args, **kwds)` raises *exc*   3.1        
 <TestCase.assertRaisesRegex>`                            and the message matches regex *r*                
+---------------------------------------------------------+--------------------------------------+------------+
 `assertWarns(warn, fun, *args, **kwds)             `fun(*args, **kwds)` raises *warn*  3.2        
 <TestCase.assertWarns>`                                                                                   
+---------------------------------------------------------+--------------------------------------+------------+
 `assertWarnsRegex(warn, r, fun, *args, **kwds)     `fun(*args, **kwds)` raises *warn*  3.2        
 <TestCase.assertWarnsRegex>`                             and the message matches regex *r*                
+---------------------------------------------------------+--------------------------------------+------------+
 `assertLogs(logger, level)                         The `with` block logs on *logger*   3.4        
 <TestCase.assertLogs>`                                   with minimum *level*                             
+---------------------------------------------------------+--------------------------------------+------------+
 `assertNoLogs(logger, level)                       The `with` block does not log on    3.10       
 <TestCase.assertNoLogs>`                                  *logger* with minimum *level*                   
+---------------------------------------------------------+--------------------------------------+------------+

method:: assertRaises(exception, callable, *args, **kwds)

method:: assertRaisesRegex(exception, regex, callable, *args, **kwds)

method:: assertWarns(warning, callable, *args, **kwds)

method:: assertWarnsRegex(warning, regex, callable, *args, **kwds)

method:: assertLogs(logger=None, level=None, formatter=None)

method:: assertNoLogs(logger=None, level=None)

There are also other methods used to perform more specific checks, such as:

+---------------------------------------+--------------------------------+--------------+
 Method                                 Checks that                     New in       
+=======================================+================================+==============+
 `assertAlmostEqual(a, b)         `round(a-b, 7) == 0`                       
 <TestCase.assertAlmostEqual>`                                                       
+---------------------------------------+--------------------------------+--------------+
 `assertNotAlmostEqual(a, b)      `round(a-b, 7) != 0`                       
 <TestCase.assertNotAlmostEqual>`                                                    
+---------------------------------------+--------------------------------+--------------+
 `assertGreater(a, b)             `a > b`                       3.1          
 <TestCase.assertGreater>`                                                           
+---------------------------------------+--------------------------------+--------------+
 `assertGreaterEqual(a, b)        `a >= b`                      3.1          
 <TestCase.assertGreaterEqual>`                                                      
+---------------------------------------+--------------------------------+--------------+
 `assertLess(a, b)                `a < b`                       3.1          
 <TestCase.assertLess>`                                                              
+---------------------------------------+--------------------------------+--------------+
 `assertLessEqual(a, b)           `a <= b`                      3.1          
 <TestCase.assertLessEqual>`                                                         
+---------------------------------------+--------------------------------+--------------+
 `assertRegex(s, r)               `r.search(s)`                 3.1          
 <TestCase.assertRegex>`                                                             
+---------------------------------------+--------------------------------+--------------+
 `assertNotRegex(s, r)            `not r.search(s)`             3.2          
 <TestCase.assertNotRegex>`                                                          
+---------------------------------------+--------------------------------+--------------+
 `assertCountEqual(a, b)          *a* contains the same elements  3.2          
`           as *b*, regardless of their                  
                                        order.                                       
+---------------------------------------+--------------------------------+--------------+
 `assertStartsWith(a, b)          `a.startswith(b)`             3.14         
 <TestCase.assertStartsWith>`                                                        
+---------------------------------------+--------------------------------+--------------+
 `assertNotStartsWith(a, b)       `not a.startswith(b)`         3.14         
 <TestCase.assertNotStartsWith>`                                                     
+---------------------------------------+--------------------------------+--------------+
 `assertEndsWith(a, b)            `a.endswith(b)`               3.14         
 <TestCase.assertEndsWith>`                                                          
+---------------------------------------+--------------------------------+--------------+
 `assertNotEndsWith(a, b)         `not a.endswith(b)`           3.14         
 <TestCase.assertNotEndsWith>`                                                       
+---------------------------------------+--------------------------------+--------------+
 `assertHasAttr(a, b)             `hasattr(a, b)`               3.14         
 <TestCase.assertHasAttr>`                                                           
+---------------------------------------+--------------------------------+--------------+
 `assertNotHasAttr(a, b)          `not hasattr(a, b)`           3.14         
 <TestCase.assertNotHasAttr>`                                                        
+---------------------------------------+--------------------------------+--------------+

method:: assertAlmostEqual(first, second, places=7, msg=None, delta=None)

method:: assertGreater(first, second, msg=None)

method:: assertRegex(text, regex, msg=None)

method:: assertCountEqual(first, second, msg=None)

method:: assertStartsWith(s, prefix, msg=None)

method:: assertNotStartsWith(s, prefix, msg=None)

method:: assertEndsWith(s, suffix, msg=None)

method:: assertNotEndsWith(s, suffix, msg=None)

method:: assertHasAttr(obj, name, msg=None)

method:: assertNotHasAttr(obj, name, msg=None)

.. _type-specific-methods:

The `assertEqual` method dispatches the equality check for objects of
the same type to different type-specific methods.  These methods are already
implemented for most of the built-in types, but it's also possible to
register new methods using `addTypeEqualityFunc`:

method:: addTypeEqualityFunc(typeobj, function)

The list of type-specific methods automatically used by
`~TestCase.assertEqual` are summarized in the following table.  Note
that it's usually not necessary to invoke these methods directly.

+-----------------------------------------+-----------------------------+--------------+
 Method                                   Used to compare              New in       
+=========================================+=============================+==============+
 `assertMultiLineEqual(a, b)        strings                      3.1          
`                                                   
+-----------------------------------------+-----------------------------+--------------+
 `assertSequenceEqual(a, b)         sequences                    3.1          
`                                                    
+-----------------------------------------+-----------------------------+--------------+
 `assertListEqual(a, b)             lists                        3.1          
`                                                        
+-----------------------------------------+-----------------------------+--------------+
 `assertTupleEqual(a, b)            tuples                       3.1          
`                                                       
+-----------------------------------------+-----------------------------+--------------+
 `assertSetEqual(a, b)              sets or frozensets           3.1          
`                                                         
+-----------------------------------------+-----------------------------+--------------+
 `assertDictEqual(a, b)             dicts                        3.1          
`                                                        
+-----------------------------------------+-----------------------------+--------------+

method:: assertMultiLineEqual(first, second, msg=None)

method:: assertSequenceEqual(first, second, msg=None, seq_type=None)

method:: assertListEqual(first, second, msg=None)

method:: assertSetEqual(first, second, msg=None)

method:: assertDictEqual(first, second, msg=None)

.. _other-methods-and-attrs:

Finally the `TestCase` provides the following methods and attributes:

method:: fail(msg=None)

attribute:: failureException

attribute:: longMessage

attribute:: maxDiff

Testing frameworks can use the following methods to collect information on
the test:

method:: countTestCases()

method:: defaultTestResult()

method:: id()

method:: shortDescription()

method:: addCleanup(function, /, *args, **kwargs)

method:: enterContext(cm)

method:: doCleanups()

classmethod:: addClassCleanup(function, /, *args, **kwargs)

classmethod:: enterClassContext(cm)

classmethod:: doClassCleanups()
