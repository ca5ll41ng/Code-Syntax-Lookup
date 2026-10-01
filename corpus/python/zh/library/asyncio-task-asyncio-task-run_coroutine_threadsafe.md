---
id: "python-zh-function-asyncio-task-run_coroutine_threadsafe"
language: "python"
lang: "zh"
category: "function"
name: "run_coroutine_threadsafe"
signature: "run_coroutine_threadsafe(coro, loop)"
directive: "function"
module: "asyncio-task"
source_url: "https://docs.python.org/zh-cn/3/library/asyncio-task.html#asyncio-task.run_coroutine_threadsafe"
license: "PSF"
updated: "2026-10-01"
---

# run_coroutine_threadsafe

向指定事件循环提交一个协程。（线程安全）

Return a `concurrent.futures.Future` to wait for the result
from another OS thread.

This function is meant to be called from a different OS thread
than the one where the event loop is running.  Example::

  def in_thread(loop: asyncio.AbstractEventLoop) -> None:
      # Run some blocking IO
      pathlib.Path("example.txt").write_text("hello world", encoding="utf8")

      # Create a coroutine
      coro = asyncio.sleep(1, result=3)

      # Submit the coroutine to a given loop
      future = asyncio.run_coroutine_threadsafe(coro, loop)

      # Wait for the result with an optional timeout argument
      assert future.result(timeout=2) == 3

  async def amain() -> None:
      # Get the running loop
      loop = asyncio.get_running_loop()

      # Run something in a thread
      await asyncio.to_thread(in_thread, loop)

也有可能反过来运行。例如::

  @contextlib.contextmanager
  def loop_in_thread() -> Generator[asyncio.AbstractEventLoop]:
      loop_fut = concurrent.futures.Future[asyncio.AbstractEventLoop]()
      stop_event = asyncio.Event()

      async def main() -> None:
          loop_fut.set_result(asyncio.get_running_loop())
          await stop_event.wait()

      with concurrent.futures.ThreadPoolExecutor(1) as tpe:
          complete_fut = tpe.submit(asyncio.run, main())
          for fut in concurrent.futures.as_completed((loop_fut, complete_fut)):
              if fut is loop_fut:
                  loop = loop_fut.result()
                  try:
                      yield loop
                  finally:
                      loop.call_soon_threadsafe(stop_event.set)
              else:
                  fut.result()

  # Create a loop in another thread
  with loop_in_thread() as loop:
      # Create a coroutine
      coro = asyncio.sleep(1, result=3)

      # Submit the coroutine to a given loop
      future = asyncio.run_coroutine_threadsafe(coro, loop)

      # Wait for the result with an optional timeout argument
      assert future.result(timeout=2) == 3

If an exception is raised in the coroutine, the returned Future
will be notified.  It can also be used to cancel the task in
the event loop::

  try:
      result = future.result(timeout)
  except TimeoutError:
      print('The coroutine took too long, cancelling the task...')
      future.cancel()
  except Exception as exc:
      print(f'The coroutine raised an exception: {exc!r}')
  else:
      print(f'The coroutine returned: {result!r}')

See the `concurrency and multithreading`
section of the documentation.

Unlike other asyncio functions this function requires the *loop*
argument to be passed explicitly.

> *Added in 3.5.1*
