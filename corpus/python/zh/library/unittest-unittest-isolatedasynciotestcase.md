---
id: "python-zh-function-unittest-isolatedasynciotestcase"
language: "python"
lang: "zh"
category: "function"
name: "IsolatedAsyncioTestCase"
signature: "IsolatedAsyncioTestCase(methodName='runTest')"
directive: "class"
module: "unittest"
source_url: "https://docs.python.org/zh-cn/3/library/unittest.html#unittest.IsolatedAsyncioTestCase"
license: "PSF"
updated: "2026-10-01"
---

# IsolatedAsyncioTestCase

This class provides an API similar to `TestCase` and also accepts
coroutines as test functions.

> *Added in 3.8*

attribute:: loop_factory

method:: asyncSetUp()

method:: asyncTearDown()

method:: addAsyncCleanup(function, /, *args, **kwargs)

method:: enterAsyncContext(cm)

method:: run(result=None)

一个显示先后顺序的例子::

   from unittest import IsolatedAsyncioTestCase

   events = []

   class Test(IsolatedAsyncioTestCase):

       def setUp(self):
           events.append("setUp")

       async def asyncSetUp(self):
           self._async_connection = await AsyncConnection()
           events.append("asyncSetUp")

       async def test_response(self):
           events.append("test_response")
           response = await self._async_connection.get("https://example.com")
           self.assertEqual(response.status_code, 200)
           self.addAsyncCleanup(self.on_cleanup)

       def tearDown(self):
           events.append("tearDown")

       async def asyncTearDown(self):
           await self._async_connection.close()
           events.append("asyncTearDown")

       async def on_cleanup(self):
           events.append("cleanup")

   if __name__ == "__main__":
       unittest.main()

在运行测试之后，``events`` 将会包含 ``["setUp", "asyncSetUp", "test_response", "asyncTearDown", "tearDown", "cleanup"]``。
