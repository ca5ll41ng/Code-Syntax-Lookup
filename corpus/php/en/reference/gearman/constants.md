---
id: "en-php-guide-gearman-constants"
language: "php"
lang: "en"
category: "guide"
name: "gearman.constants"
title: "Predefined Constants"
module: "gearman"
source_url: "https://www.php.net/manual/en/gearman.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Predefined Constants

The constants below are defined by this extension, and will only be available when the extension has either been compiled into PHP or dynamically loaded at runtime.

Return values. Always check `GearmanClient::error()` or `GearmanWorker()` for a string error, as it may contain more details:

- **`GEARMAN_SUCCESS` (`int`)** — Whatever action was taken was successful.
- **`GEARMAN_IO_WAIT` (`int`)** — When in non-blocking mode, an event is hit that would have blocked.
- **`GEARMAN_ERRNO` (`int`)** — A system error. Check `GearmanClient::errno()` or `GearmanWorker::errno()` for the system error code that was returned.
- **`GEARMAN_NO_ACTIVE_FDS` (`int`)** — `GearmanClient::wait()` or `GearmanWorker()` was called with no connections.
- **`GEARMAN_UNEXPECTED_PACKET` (`int`)** — Indicates something going very wrong in gearmand. Applies only to `GearmanWorker`.
- **`GEARMAN_GETADDRINFO` (`int`)** — DNS resolution failed (invalid host, port, etc).
- **`GEARMAN_NO_SERVERS` (`int`)** — Did not call `GearmanClient::addServer()` before submitting jobs or tasks.
- **`GEARMAN_LOST_CONNECTION` (`int`)** — Lost a connection during a request.
- **`GEARMAN_MEMORY_ALLOCATION_FAILURE` (`int`)** — Memory allocation failed (ran out of memory).
- **`GEARMAN_SERVER_ERROR` (`int`)** — Something went wrong in the Gearman server and it could not handle the request gracefully.
- **`GEARMAN_WORK_DATA` (`int`)** — Notice return code obtained with `GearmanClient::returnCode()` when using `GearmanClient::do()`. Sent to update the client with data from a running job. A worker uses this when it needs to send updates, send partial results, or flush data during long running jobs.
- **`GEARMAN_WORK_WARNING` (`int`)** — Notice return code obtained with `GearmanClient::returnCode()` when using `GearmanClient::do()`. Updates the client with a warning. The behavior is just like `GEARMAN_WORK_DATA`, but should be treated as a warning instead of normal response data.
- **`GEARMAN_WORK_STATUS` (`int`)** — Notice return code obtained with `GearmanClient::returnCode()` when using `GearmanClient::do()`. Sent to update the status of a long running job. Use `GearmanClient::doStatus()` to obtain the percentage complete of the task.
- **`GEARMAN_WORK_EXCEPTION` (`int`)** — Notice return code obtained with `GearmanClient::returnCode()` when using `GearmanClient::do()`. Indicates that a job failed with a given exception.
- **`GEARMAN_WORK_FAIL` (`int`)** — Notice return code obtained with `GearmanClient::returnCode()` when using `GearmanClient::do()`. Indicates that the job failed.
- **`GEARMAN_COULD_NOT_CONNECT` (`int`)** — Failed to connect to servers.
- **`GEARMAN_INVALID_FUNCTION_NAME` (`int`)** — Trying to register a function name of NULL or using the callback interface without specifying callbacks.
- **`GEARMAN_INVALID_WORKER_FUNCTION` (`int`)** — Trying to register a function with a NULL callback function.
- **`GEARMAN_NO_REGISTERED_FUNCTIONS` (`int`)** — When a worker gets a job for a function it did not register.
- **`GEARMAN_NO_JOBS` (`int`)** — For a non-blocking worker, when `GearmanWorker::work()` does not have any active jobs.
- **`GEARMAN_ECHO_DATA_CORRUPTION` (`int`)** — After `GearmanClient::echo()` or `GearmanWorker::echo()` the data returned doesn't match the data sent.
- **`GEARMAN_NEED_WORKLOAD_FN` (`int`)** — When the client opted to stream the workload of a task, but did not specify a workload callback function.
- **`GEARMAN_PAUSE` (`int`)** — For the non-blocking client task interface, can be returned from the task callback to "pause" the call and return from `GearmanClient::runTasks()`. Call `GearmanClient::runTasks()` again to continue.
- **`GEARMAN_UNKNOWN_STATE` (`int`)** — Internal client/worker state error.
- **`GEARMAN_SEND_BUFFER_TOO_SMALL` (`int`)** — Internal error: trying to flush more data in one atomic chunk than is possible due to hard-coded buffer sizes.
- **`GEARMAN_TIMEOUT` (`int`)** — Hit the timeout limit set by the client/worker.

`GearmanClient` options:

- **`GEARMAN_CLIENT_GENERATE_UNIQUE` (`int`)** — Generate a unique id (UUID) for each task.
- **`GEARMAN_CLIENT_NON_BLOCKING` (`int`)** — Run the cient in a non-blocking mode.
- **`GEARMAN_CLIENT_UNBUFFERED_RESULT` (`int`)** — Allow the client to read data in chunks rather than have the library buffer the entire data result and pass that back.
- **`GEARMAN_CLIENT_FREE_TASKS` (`int`)** — Automatically free task objects once they are complete. This is the default setting in this extension to prevent memory leaks.

`GearmanWorker` options:

- **`GEARMAN_WORKER_NON_BLOCKING` (`int`)** — Run the worker in non-blocking mode.
- **`GEARMAN_WORKER_GRAB_UNIQ` (`int`)** — Return the client assigned unique ID in addition to the job handle.

Base Gearman configuration:

- **`GEARMAN_DEFAULT_TCP_HOST` (`string`)**
- **`GEARMAN_DEFAULT_TCP_PORT` (`int`)**
- **`GEARMAN_DEFAULT_SOCKET_TIMEOUT` (`int`)**
- **`GEARMAN_DEFAULT_SOCKET_SEND_SIZE` (`int`)**
- **`GEARMAN_DEFAULT_SOCKET_RECV_SIZE` (`int`)**
- **`GEARMAN_MAX_ERROR_SIZE` (`int`)**
- **`GEARMAN_PACKET_HEADER_SIZE` (`int`)**
- **`GEARMAN_JOB_HANDLE_SIZE` (`int`)**
- **`GEARMAN_OPTION_SIZE` (`int`)**
- **`GEARMAN_UNIQUE_SIZE` (`int`)**
- **`GEARMAN_MAX_COMMAND_ARGS` (`int`)**
- **`GEARMAN_ARGS_BUFFER_SIZE` (`int`)**
- **`GEARMAN_SEND_BUFFER_SIZE` (`int`)**
- **`GEARMAN_RECV_BUFFER_SIZE` (`int`)**
- **`GEARMAN_WORKER_WAIT_TIMEOUT` (`int`)**
