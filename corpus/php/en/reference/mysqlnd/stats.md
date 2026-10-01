---
id: "en-php-guide-mysqlnd-stats"
language: "php"
lang: "en"
category: "guide"
name: "mysqlnd.stats"
title: "Statistics"
module: "mysqlnd"
source_url: "https://www.php.net/manual/en/mysqlnd.stats.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# Statistics

MySQL Native Driver contains support for gathering statistics on the communication between the client and the server. The statistics gathered are of two main types:

- Client statistics
- Connection statistics

When using the mysqli extension, these statistics can be obtained through two API calls:

- `mysqli_get_client_stats()`
- `mysqli_get_connection_stats()`

> Statistics are aggregated among all extensions that use the MySQL Native Driver. For example, if the mysqli extension and the PDO MySQL driver are both set-up to use MySQLnd, then function calls from mysqli and method calls from PDO will affect the statistics.
>
> There is no way to find out how much a certain API call of any extension that has been compiled against MySQL Native Driver has impacted a certain statistic.

## Retrieving statistics

Client statistics can be retrieved by calling the `mysqli_get_client_stats()` function.

Connection statistics can be retrieved by calling the `mysqli_get_connection_stats()` function.

Both functions return an associative array, where the name of a statistic is the key for the corresponding statistical data.

## MySQL Native Driver Statistics

Most statistics are associated to a connection, but some are associated to the process in which case this will be mentioned.

The following statistics are produced by the MySQL Native Driver:

- **`bytes_sent`** — Number of bytes sent from PHP to the MySQL server.
- **`bytes_received`** — Number of bytes received from the MySQL server.
- **`packets_sent`** — Number of packets sent by the MySQL Client Server protocol.
- **`packets_received`** — Number of packets received from the MySQL Client Server protocol.
- **`protocol_overhead_in`** — MySQL Client Server protocol overhead in bytes for incoming traffic. Currently only the Packet Header (4 bytes) is considered as overhead. protocol_overhead_in = packets_received * 4
- **`protocol_overhead_out`** — MySQL Client Server protocol overhead in bytes for outgoing traffic. Currently only the Packet Header (4 bytes) is considered as overhead. protocol_overhead_out = packets_received * 4
- **`bytes_received_ok_packet`** — Total size of bytes of MySQL Client Server protocol OK packets received. OK packets can contain a status message. The length of the status message can vary and thus the size of an OK packet is not fixed.
  > The total size in bytes includes the size of the header packet (4 bytes, see protocol overhead).


- **`packets_received_ok`** — Number of MySQL Client Server protocol OK packets received.
- **`bytes_received_eof_packet`** — Total size in bytes of MySQL Client Server protocol EOF packets received. EOF can vary in size depending on the server version. Also, EOF can transport an error message.



- **`packets_received_eof`** — Number of MySQL Client Server protocol EOF packets. — Like with other packet statistics the number of packets will be increased even if PHP does not receive the expected packet but, for example, an error message.
- **`bytes_received_rset_header_packet`** — Total size in bytes of MySQL Client Server protocol result set header packets. The size of the packets varies depending on the payload (`LOAD LOCAL INFILE`, `INSERT`, `UPDATE`, `SELECT`, error message).



- **`packets_received_rset_header`** — Number of MySQL Client Server protocol result set header packets.
- **`bytes_received_rset_field_meta_packet`** — Total size in bytes of MySQL Client Server protocol result set metadata (field information) packets. Of course the size varies with the fields in the result set. The packet may also transport an error or an EOF packet in case of COM_LIST_FIELDS.



- **`packets_received_rset_field_meta`** — Number of MySQL Client Server protocol result set metadata (field information) packets.
- **`bytes_received_rset_row_packet`** — Total size in bytes of MySQL Client Server protocol result set row data packets. The packet may also transport an error or an EOF packet. One can compute the number of error and EOF packets by subtracting `rows_fetched_from_server_normal` and `rows_fetched_from_server_ps` from `bytes_received_rset_row_packet`.



- **`packets_received_rset_row`** — Number of MySQL Client Server protocol result set row data packets.
- **`bytes_received_prepare_response_packet`** — Total size in bytes of MySQL Client Server protocol OK for Prepared Statement Initialization packets (prepared statement init packets). The packet may also transport an error. The packet size depends on the MySQL version.



- **`packets_received_prepare_response`** — Number of MySQL Client Server protocol OK for Prepared Statement Initialization packets (prepared statement init packets).
- **`bytes_received_change_user_packet`** — Total size in bytes of MySQL Client Server protocol COM_CHANGE_USER packets. The packet may also transport an error or EOF.



- **`packets_received_change_user`** — Number of MySQL Client Server protocol COM_CHANGE_USER packets.
- **`packets_sent_command`** — Number of MySQL Client Server protocol commands sent from PHP to MySQL. — There is no way to know which specific commands and how many of them have been sent.
- **`bytes_received_real_data_normal`** — Number of bytes of payload fetched by the PHP client from `mysqlnd` using the text protocol. — This is the size of the actual data contained in result sets that do not originate from prepared statements and which have been fetched by the PHP client. — Note that although a full result set may have been pulled from MySQL by `mysqlnd`, this statistic only counts actual data pulled from `mysqlnd` by the PHP client. — An example of a code sequence that will increase the value is as follows: ```text $mysqli = new mysqli(); $res = $mysqli->query("SELECT 'abc'"); $res->fetch_assoc(); $res->close(); ``` Every fetch operation will increase the value. — However, the statistic will not be increased if the result set is only buffered on the client, but not fetched, such as in the following example: ```text $mysqli = new mysqli(); $res = $mysqli->query("SELECT 'abc'"); $res->close(); ```
- **`bytes_received_real_data_ps`** — Number of bytes of the payload fetched by the PHP client from `mysqlnd` using the prepared statement protocol. — This is the size of the actual data contained in result sets that originate from prepared statements and which have been fetched by the PHP client. — The value will not be increased if the result set is not subsequently read by the PHP client. — Note that although a full result set may have been pulled from MySQL by `mysqlnd`, this statistic only counts actual data pulled from `mysqlnd` by the PHP client. — See also `bytes_received_real_data_normal`.

- **`result_set_queries`** — Number of queries that have generated a result set. Examples of queries that generate a result set: `SELECT`, `SHOW`. — The statistic will not be incremented if there is an error reading the result set header packet from the line.
  > This statistic can be used as an indirect measure for the number of queries PHP has sent to MySQL. This could help identifying a client that causes a high database load.


- **`non_result_set_queries`** — Number of queries that did not generate a result set. Examples of queries that do not generate a result set: `INSERT`, `UPDATE`, `LOAD DATA`. — The statistic will not be incremented if there is an error reading the result set header packet from the line.



- **`no_index_used`** — Number of queries that have generated a result set but did not use an index. (See also the mysqld start option `--log-queries-not-using-indexes`).
  > Those queries can be reported via an exception by calling mysqli_report(MYSQLI_REPORT_INDEX);. It is possible to have them be reported via a warning instead by calling mysqli_report(MYSQLI_REPORT_INDEX ^ MYSQLI_REPORT_STRICT);.


- **`bad_index_used`** — Number of queries that have generated a result set and did not use a good index. (See also the mysqld start option `--log-slow-queries`).



- **`slow_queries`** — SQL statements that took more than `long_query_time` seconds to execute and required at least `min_examined_row_limit` rows to be examined.
  > Not reported through `mysqli_report()`.


- **`buffered_sets`** — Number of buffered result sets returned by normal (i.e. not via a prepared statement) queries. — Examples of API calls that will buffer result sets on the client: `mysqli_query()` `mysqli_store_result()` `mysqli_stmt_get_result()`
- **`unbuffered_sets`** — Number of unbuffered result sets returned by normal (i.e. not via a prepared statement) queries. — Examples of API calls that will not buffer result sets on the client: `mysqli_use_result()`
- **`ps_buffered_sets`** — Number of buffered result sets returned by prepared statements. — Examples of API calls that will buffer result sets on the client: `mysqli_stmt_store_result()`
- **`ps_unbuffered_sets`** — Number of unbuffered result sets returned by prepared statements. — By default prepared statements are unbuffered, thus most prepared statements will be accounted in this statistic.
- **`flushed_normal_sets`** — Number of result sets returned by normal (i.e. not via a prepared statement) queries with unread data that have been silently flushed.
  > Flushing happens only with unbuffered result sets.
  >
  > Unbuffered result sets must be fetched completely before a new query can be run on the connection otherwise MySQL will throw an error. If the application does not fetch all rows from an unbuffered result set, mysqlnd does implicitly fetch the result set to clear the line.
  >
  > See also `rows_skipped_normal`, `rows_skipped_ps`.
  >
  > Some possible causes for an implicit flush:
  >
  > - Faulty client application
  > - Client stopped reading after it found what it was looking for but has made MySQL calculate more records than needed
  > - Client application has stopped unexpectedly


- **`flushed_ps_sets`** — Number of result sets from prepared statements with unread data that have been silently flushed.



- **`ps_prepared_never_executed`** — Number of statements prepared but never executed.
- **`ps_prepared_once_executed`** — Number of prepared statements executed only once.
- **`rows_fetched_from_server_normal`** — Total number of result set rows fetched from the server. This includes the rows which were not read by the client but had been implicitly fetched due to flushed unbuffered result sets. — See also `packets_received_rset_row`.
- **`rows_buffered_from_client_normal`** — Total number of buffered rows originating from a normal query. — This is the number of rows that have been fetched from MySQL and buffered on client. — Examples of queries that will buffer results: `mysqli_query()` `mysqli_store_result()`
- **`rows_buffered_from_client_ps`** — Same as `rows_buffered_from_client_normal` but for prepared statements.
- **`rows_fetched_from_client_normal_buffered`** — Total number of rows fetched by the client from a buffered result set created by a normal query.
- **`rows_fetched_from_client_ps_buffered`** — Total number of rows fetched by the client from a buffered result set created by a prepared statement.
- **`rows_fetched_from_client_normal_unbuffered`** — Total number of rows fetched by the client from an unbuffered result set created by a normal query.
- **`rows_fetched_from_client_ps_unbuffered`** — Total number of rows fetched by the client from an unbuffered result set created by a prepared statement.
- **`rows_fetched_from_client_ps_cursor`** — Total number of rows fetch by the client from a cursor created by a prepared statement.
- **`rows_skipped_normal`** — Reserved for future use (currently not supported).
- **`copy_on_write_saved`** — This is a process level scope statistic. — With mysqlnd, variables returned by the extensions point into mysqlnd internal network result buffers. If the data are not changed, the fetched data is kept only once in memory. However, any modification to the data will require mysqlnd to perform a copy-on-write operation.
- **`explicit_free_result`** — This is a connection and process level scope statistic. — Total number of freed result sets.
- **`proto_text_fetched_null`** — Total number of columns of type `MYSQL_TYPE_NULL` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_null`** — Total number of columns of type `MYSQL_TYPE_NULL` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_bit`** — Total number of columns of type `MYSQL_TYPE_BIT` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_bit`** — Total number of columns of type `MYSQL_TYPE_BIT` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_tinyint`** — Total number of columns of type `MYSQL_TYPE_TINY` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_tinyint`** — Total number of columns of type `MYSQL_TYPE_TINY` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_short`** — Total number of columns of type `MYSQL_TYPE_SHORT` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_short`** — Total number of columns of type `MYSQL_TYPE_SHORT` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_int24`** — Total number of columns of type `MYSQL_TYPE_INT24` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_int24`** — Total number of columns of type `MYSQL_TYPE_INT24` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_int`** — Total number of columns of type `MYSQL_TYPE_LONG` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_int`** — Total number of columns of type `MYSQL_TYPE_LONG` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_bigint`** — Total number of columns of type `MYSQL_TYPE_LONGLONG` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_bigint`** — Total number of columns of type `MYSQL_TYPE_LONGLONG` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_decimal`** — Total number of columns of type `MYSQL_TYPE_DECIMAL`, or `MYSQL_TYPE_NEWDECIMAL` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_decimal`** — Total number of columns of type `MYSQL_TYPE_DECIMAL`, or `MYSQL_TYPE_NEWDECIMAL` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_float`** — Total number of columns of type `MYSQL_TYPE_FLOAT` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_float`** — Total number of columns of type `MYSQL_TYPE_FLOAT` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_double`** — Total number of columns of type `MYSQL_TYPE_DOUBLE` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_double`** — Total number of columns of type `MYSQL_TYPE_DOUBLE` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_date`** — Total number of columns of type `MYSQL_TYPE_DATE`, or `MYSQL_TYPE_NEWDATE` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_date`** — Total number of columns of type `MYSQL_TYPE_DATE`, or `MYSQL_TYPE_NEWDATE` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_year`** — Total number of columns of type `MYSQL_TYPE_YEAR` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_year`** — Total number of columns of type `MYSQL_TYPE_YEAR` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_time`** — Total number of columns of type `MYSQL_TYPE_TIME` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_time`** — Total number of columns of type `MYSQL_TYPE_TIME` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_datetime`** — Total number of columns of type `MYSQL_TYPE_DATETIME` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_datetime`** — Total number of columns of type `MYSQL_TYPE_DATETIME` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_timestamp`** — Total number of columns of type `MYSQL_TYPE_TIMESTAMP` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_timestamp`** — Total number of columns of type `MYSQL_TYPE_TIMESTAMP` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_string`** — Total number of columns of type `MYSQL_TYPE_STRING`, `MYSQL_TYPE_VARSTRING`, or `MYSQL_TYPE_VARCHAR` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_string`** — Total number of columns of type `MYSQL_TYPE_STRING`, `MYSQL_TYPE_VARSTRING`, or `MYSQL_TYPE_VARCHAR` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_blob`** — Total number of columns of type `MYSQL_TYPE_TINY_BLOB`, `MYSQL_TYPE_MEDIUM_BLOB`, `MYSQL_TYPE_LONG_BLOB`, or `MYSQL_TYPE_BLOB` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_blob`** — Total number of columns of type `MYSQL_TYPE_TINY_BLOB`, `MYSQL_TYPE_MEDIUM_BLOB`, `MYSQL_TYPE_LONG_BLOB`, or `MYSQL_TYPE_BLOB` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_enum`** — Total number of columns of type `MYSQL_TYPE_ENUM` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_enum`** — Total number of columns of type `MYSQL_TYPE_ENUM` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_set`** — Total number of columns of type `MYSQL_TYPE_SET` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_set`** — Total number of columns of type `MYSQL_TYPE_SET` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_geometry`** — Total number of columns of type `MYSQL_TYPE_GEOMETRY` fetched from a normal query (MySQL text protocol).
- **`proto_binary_fetched_geometry`** — Total number of columns of type `MYSQL_TYPE_GEOMETRY` fetched from a prepared statement (MySQL binary protocol).
- **`proto_text_fetched_other`** — Total number of columns of types `MYSQL_TYPE_{*}` not listed previously fetched from a normal query (MySQL text protocol).
  > In theory, this should always be `0`.


- **`proto_binary_fetched_other`** — Total number of columns of type `MYSQL_TYPE_{*}` not listed previously fetched from a prepared statement (MySQL binary protocol).
  > In theory, this should always be `0`.



- **`connect_success`** — Total number of successful connection attempts.
  > `connect_success` holds the sum of successful persistent and non-persistent connection attempts. Therefore, the number of successful non-persistent connection attempts is `connect_success - pconnect_success`.


- **`pconnect_success`** — Total number of successful persistent connection attempts.
- **`connect_failure`** — Total number of failed connection attempts.
- **`reconnect`** — This is a process level scope statistic.
- **`active_connections`** — This is a process level scope statistic. — Total number of active persistent and non-persistent connections.
  > The total number of active non-persistent connections is `active_connections - active_persistent_connections`.


- **`active_persistent_connections`** — This is a process level scope statistic. — Total number of active persistent connections.
- **`explicit_close`** — Total number of explicitly closed connections.
  **Examples of code snippets that cause an explicit close**

  - ```text $link = new mysqli(/* ... */); $link->close(/* ... */); ```
  - ```text $link = new mysqli(/* ... */); $link->connect(/* ... */); ```


- **`implicit_close`** — Total number of implicitly closed connections.
  **Examples of code snippets that cause an implicit close**

  - ```text $link = new mysqli(/* ... */); $link->real_connect(/* ... */); ```
  - ```text ```
  - Persistent connection: pooled connection has been created with real_connect and there may be unknown options set - close implicitly to avoid returning a connection with unknown options
  - Persistent connection: ping/change_user fails and ext/mysqli closes the connection
  - End of script execution: close connections that have not been closed by the user


- **`disconnect_close`** — Connection failures indicated by the C API call `mysql_real_connect` during an attempt to establish a connection.
- **`in_middle_of_command_close`** — This is a process level scope statistic. — A connection has been closed in the middle of a command execution (outstanding result sets not fetched, after sending a query and before retrieving an answer, while fetching data, while transferring data with LOAD DATA).
  > Unless asynchronous queries are used, this should only happen if the PHP application terminated unexpectedly, and PHP shuts down the connection automatically.


- **`init_command_executed_count`** — Total number of init command executions. For example: mysqli_options(MYSQLI_INIT_COMMAND , $value). — The number of successful executions is `init_command_executed_count - init_command_failed_count`.
- **`init_command_failed_count`** — Total number of failed init commands.

- **`com_quit`** — Total number of attempts to send a certain `COM_*` command from PHP to MySQL. — The statistics are incremented after checking the line and immediately before sending the corresponding MySQL client server protocol packet.
  > If MySQLnd fails to send the packet over the wire the statistics will not be decremented. In case of a failure MySQLnd emits a PHP warning Error while sending %s packet. PID=%d.


  **Usage examples**

  - Check if PHP sends certain commands to MySQL, for example, check if a client sends `COM_PROCESS_KILL`
  - Calculate the average number of prepared statement executions by comparing `COM_EXECUTE` with `COM_PREPARE`
  - Check if PHP has run any non-prepared SQL statements by checking if `COM_QUERY` is zero
  - Identify PHP scripts that run an excessive number of SQL statements by checking `COM_QUERY` and `COM_EXECUTE`



- **`explicit_stmt_close`** — This is a process level scope statistic. — Total number of closed prepared statements.
  > A prepared statement is always explicitly closed. The only time it's closed implicitly is when preparing it fails.


- **`mem_emalloc_count`** — This is a process level scope statistic. — Memory management calls.
- **`command_buffer_too_small`** — Number of network command buffer extensions while sending commands from PHP to MySQL. — MySQLnd allocates an internal command/network buffer of mysqlnd.net_cmd_buffer_size bytes for every connection. — If a MySQL Client Server protocol command, e.g. `COM_QUERY` (normal query), does not fit into the buffer, MySQLnd will grow the buffer to what is needed for sending the command. Whenever the buffer gets extended for one connection `command_buffer_too_small` will be incremented by one. — If MySQLnd has to grow the buffer beyond its initial size of mysqlnd.net_cmd_buffer_size bytes for almost every connection, considerations to increase the default size should be made to avoid re-allocations.
- **`connection_reused`** — The total number of times a persistent connection has been reused.
