---
id: "js-en-function-node-sqlite"
language: "js"
lang: "en"
category: "function"
name: "node:sqlite"
title: "SQLite"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/sqlite.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# SQLite

<h1>SQLite</h1>
<blockquote>
<p>Stability: 1.2 - Release candidate.</p>
</blockquote>
<p>The <code>node:sqlite</code> module facilitates working with SQLite databases.
To access it:</p>
<pre><code class="language-mjs">import sqlite from 'node:sqlite';
</code></pre>
<pre><code class="language-cjs">const sqlite = require('node:sqlite');
</code></pre>
<p>This module is only available under the <code>node:</code> scheme. SQL trace events can
be observed via the <a href="diagnostics_channel.md"><code>diagnostics_channel</code></a> module. See
<a href="diagnostics_channel.md#event-sqlitedbquery"><code>'sqlite.db.query'</code></a> for details.</p>
<p>The following example shows the basic usage of the <code>node:sqlite</code> module to open
an in-memory database, write data to the database, and then read the data back.</p>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';
const database = new Database(':memory:');

// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE data(
    key INTEGER PRIMARY KEY,
    value TEXT
  ) STRICT
`);
// Create a prepared statement to insert data into the database.
const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
// Execute the prepared statement with bound values.
insert.run(1, 'hello');
insert.run(2, 'world');
// Finalize the prepared statement once it is no longer needed.
insert.close();
// Create a prepared statement to read data from the database.
const query = database.prepare('SELECT * FROM data ORDER BY key');
// Execute the prepared statement and log the result set.
console.log(query.all());
// Prints: [ { key: 1, value: 'hello' }, { key: 2, value: 'world' } ]
query.close();
</code></pre>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');
const database = new Database(':memory:');

// Execute SQL statements from strings.
database.exec(`
  CREATE TABLE data(
    key INTEGER PRIMARY KEY,
    value TEXT
  ) STRICT
`);
// Create a prepared statement to insert data into the database.
const insert = database.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
// Execute the prepared statement with bound values.
insert.run(1, 'hello');
insert.run(2, 'world');
// Finalize the prepared statement once it is no longer needed.
insert.close();
// Create a prepared statement to read data from the database.
const query = database.prepare('SELECT * FROM data ORDER BY key');
// Execute the prepared statement and log the result set.
console.log(query.all());
// Prints: [ { key: 1, value: 'hello' }, { key: 2, value: 'world' } ]
query.close();
</code></pre>
<h2>Type conversion between JavaScript and SQLite</h2>
<p>When Node.js writes to or reads from SQLite, it is necessary to convert between
JavaScript data types and SQLite's <a href="https://www.sqlite.org/datatype3.html">data types</a>. Because JavaScript supports
more data types than SQLite, only a subset of JavaScript types are supported.
Attempting to write an unsupported data type to SQLite will result in an
exception.</p>
<table>
<thead>
<tr>
<th>Storage class</th>
<th>JavaScript to SQLite</th>
<th>SQLite to JavaScript</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>NULL</code></td>
<td>{null} or {undefined}</td>
<td>{null}</td>
</tr>
<tr>
<td><code>INTEGER</code></td>
<td>{number}, {bigint}, or {boolean}</td>
<td>{number} or {bigint} <em>(configurable)</em></td>
</tr>
<tr>
<td><code>REAL</code></td>
<td>{number}</td>
<td>{number}</td>
</tr>
<tr>
<td><code>TEXT</code></td>
<td>{string}</td>
<td>{string}</td>
</tr>
<tr>
<td><code>BLOB</code></td>
<td>{TypedArray}, {DataView}, {ArrayBuffer}, or {SharedArrayBuffer}</td>
<td>{Uint8Array}</td>
</tr>
</tbody>
</table>
<p>Booleans are written as the <code>INTEGER</code> values <code>1</code> and <code>0</code>. Like any other
<code>INTEGER</code> value, they are read back as {number} by default, or as {bigint}
values (<code>1n</code> and <code>0n</code>) when reading BigInts is enabled. Writing a {bigint} that
does not fit in a signed 64-bit integer throws an <code>ERR_INVALID_ARG_VALUE</code>
error.</p>
<p><code>undefined</code> is written as <code>NULL</code>, so passing it explicitly is equivalent to
omitting a named parameter. <code>NULL</code> always reads back as {null}, never
<code>undefined</code>.</p>
<p>APIs that read values from SQLite have a configuration option that determines
whether <code>INTEGER</code> values are converted to <code>number</code> or <code>bigint</code> in JavaScript,
such as the <code>readBigInts</code> option for statements and the <code>useBigIntArguments</code>
option for user-defined functions. If Node.js reads an <code>INTEGER</code> value from
SQLite that is outside the JavaScript <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isSafeInteger">safe integer</a> range, and the option to
read BigInts is not enabled, then an <code>ERR_OUT_OF_RANGE</code> error will be thrown.</p>
<h2>Class: <code>Database</code></h2>
<p>This class represents a single <a href="https://www.sqlite.org/c3ref/sqlite3.html">connection</a> to a SQLite database. All APIs
exposed by this class execute synchronously.</p>
<p><code>DatabaseSync</code> is a deprecated alias for <code>Database</code>, kept for backward
compatibility with the class's previous name. See
<a href="deprecations.md#dep0210-sqlitedatabasesync">DEP0210</a>.</p>
<h3><code>new Database(path[, options])</code></h3>
<ul>
<li><code>path</code> {string | Buffer | URL} The path of the database. A SQLite database can be
stored in a file or completely <a href="https://www.sqlite.org/inmemorydb.html">in memory</a>. To use a file-backed database,
the path should be a file path. To use an in-memory database, the path
should be the special name <code>':memory:'</code>.</li>
<li><code>options</code> {Object} Configuration options for the database connection. The
following options are supported:
<ul>
<li><code>open</code> {boolean} If <code>true</code>, the database is opened by the constructor. When
this value is <code>false</code>, the database must be opened via the <code>open()</code> method.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>readOnly</code> {boolean} If <code>true</code>, the database is opened in read-only mode.
If the database does not exist, opening it will fail. <strong>Default:</strong> <code>false</code>.</li>
<li><code>enableForeignKeyConstraints</code> {boolean} If <code>true</code>, foreign key constraints
are enabled. This is recommended but can be disabled for compatibility with
legacy database schemas. The enforcement of foreign key constraints can be
enabled and disabled after opening the database using
<a href="https://www.sqlite.org/pragma.html#pragma_foreign_keys"><code>PRAGMA foreign_keys</code></a>. <strong>Default:</strong> <code>true</code>.</li>
<li><code>enableDoubleQuotedStringLiterals</code> {boolean} If <code>true</code>, SQLite will accept
<a href="https://www.sqlite.org/quirks.html#dblquote">double-quoted string literals</a>. This is not recommended but can be
enabled for compatibility with legacy database schemas.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>allowExtension</code> {boolean} If <code>true</code>, the <code>loadExtension</code> SQL function
and the <code>loadExtension()</code> method are enabled.
You can call <code>enableLoadExtension(false)</code> later to disable this feature.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>timeout</code> {number} The <a href="https://sqlite.org/c3ref/busy_timeout.html">busy timeout</a> in milliseconds. This is the maximum amount of
time that SQLite will wait for a database lock to be released before
returning an error. <strong>Default:</strong> <code>0</code>.</li>
<li><code>readBigInts</code> {boolean} If <code>true</code>, integer fields are read as JavaScript <code>BigInt</code> values. If <code>false</code>,
integer fields are read as JavaScript numbers. <strong>Default:</strong> <code>false</code>.</li>
<li><code>returnArrays</code> {boolean} If <code>true</code>, query results are returned as arrays instead of objects.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>allowBareNamedParameters</code> {boolean} If <code>true</code>, allows binding named parameters without the prefix
character (e.g., <code>foo</code> instead of <code>:foo</code>). <strong>Default:</strong> <code>true</code>.</li>
<li><code>allowUnknownNamedParameters</code> {boolean} If <code>true</code>, unknown named parameters are ignored when binding.
If <code>false</code>, an exception is thrown for unknown named parameters. <strong>Default:</strong> <code>false</code>.</li>
<li><code>defensive</code> {boolean} If <code>true</code>, enables the defensive flag. When the defensive flag is enabled,
language features that allow ordinary SQL to deliberately corrupt the database file are disabled.
The defensive flag can also be set using <code>enableDefensive()</code>.
<strong>Default:</strong> <code>true</code>.</li>
<li><code>limits</code> {Object} Configuration for various SQLite limits. These limits
can be used to prevent excessive resource consumption when handling
potentially malicious input. See <a href="https://www.sqlite.org/c3ref/limit.html">Run-Time Limits</a> and <a href="https://www.sqlite.org/c3ref/c_limit_attached.html">Limit Constants</a>
in the SQLite documentation for details. Default values are determined by
SQLite's compile-time defaults and may vary depending on how SQLite was
built. The following properties are supported:
<ul>
<li><code>length</code> {number} Maximum length of a string or BLOB.</li>
<li><code>sqlLength</code> {number} Maximum length of an SQL statement.</li>
<li><code>column</code> {number} Maximum number of columns.</li>
<li><code>exprDepth</code> {number} Maximum depth of an expression tree.</li>
<li><code>compoundSelect</code> {number} Maximum number of terms in a compound SELECT.</li>
<li><code>vdbeOp</code> {number} Maximum number of VDBE instructions.</li>
<li><code>functionArg</code> {number} Maximum number of function arguments.</li>
<li><code>attach</code> {number} Maximum number of attached databases.</li>
<li><code>likePatternLength</code> {number} Maximum length of a LIKE pattern.</li>
<li><code>variableNumber</code> {number} Maximum number of SQL variables.</li>
<li><code>triggerDepth</code> {number} Maximum trigger recursion depth.</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>Constructs a new <code>Database</code> instance.</p>
<h3><code>database.aggregate(name, options)</code></h3>
<p>Registers a new aggregate function with the SQLite database. This method is a wrapper around
<a href="https://www.sqlite.org/c3ref/create_function.html"><code>sqlite3_create_window_function()</code></a>.</p>
<ul>
<li><code>name</code> {string} The name of the SQLite function to create.</li>
<li><code>options</code> {Object} Function configuration settings.
<ul>
<li><code>deterministic</code> {boolean} If <code>true</code>, the <a href="https://www.sqlite.org/c3ref/c_deterministic.html"><code>SQLITE_DETERMINISTIC</code></a> flag is
set on the created function. <strong>Default:</strong> <code>false</code>.</li>
<li><code>directOnly</code> {boolean} If <code>true</code>, the <a href="https://www.sqlite.org/c3ref/c_deterministic.html"><code>SQLITE_DIRECTONLY</code></a> flag is set on
the created function. <strong>Default:</strong> <code>false</code>.</li>
<li><code>useBigIntArguments</code> {boolean} If <code>true</code>, integer arguments to <code>options.step</code> and <code>options.inverse</code>
are converted to <code>BigInt</code>s. If <code>false</code>, integer arguments are passed as
JavaScript numbers. <strong>Default:</strong> <code>false</code>.</li>
<li><code>varargs</code> {boolean} If <code>true</code>, <code>options.step</code> and <code>options.inverse</code> may be invoked with any number of
arguments (between zero and <a href="https://www.sqlite.org/limits.html#max_function_arg"><code>SQLITE_MAX_FUNCTION_ARG</code></a>). If <code>false</code>,
<code>inverse</code> and <code>step</code> must be invoked with exactly <code>length</code> arguments, and
their <code>length</code> properties must be integers.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>start</code> {number | string | null | Array | Object | Function} The identity
value for the aggregation function. This value is used when the aggregation
function is initialized. When a {Function} is passed the identity will be its return value.</li>
<li><code>step</code> {Function} The function to call for each row in the aggregation. The
function receives the current state and the row value. The return value of
this function should be the new state.</li>
<li><code>result</code> {Function} The function to call to get the result of the
aggregation. The function receives the final state and should return the
result of the aggregation.</li>
<li><code>inverse</code> {Function} When this function is provided, the <code>aggregate</code> method will work as a window function.
The function receives the current state and the dropped row value. The return value of this function should be the
new state.</li>
</ul>
</li>
</ul>
<p>When used as a window function, the <code>result</code> function will be called multiple times.</p>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');

const db = new Database(':memory:');
db.exec(`
  CREATE TABLE t3(x, y);
  INSERT INTO t3 VALUES ('a', 4),
                        ('b', 5),
                        ('c', 3),
                        ('d', 8),
                        ('e', 1);
`);

db.aggregate('sumint', {
  start: 0,
  step: (acc, value) =&gt; acc + value,
});

using query = db.prepare('SELECT sumint(y) as total FROM t3');
query.get(); // { total: 21 }
</code></pre>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';

const db = new Database(':memory:');
db.exec(`
  CREATE TABLE t3(x, y);
  INSERT INTO t3 VALUES ('a', 4),
                        ('b', 5),
                        ('c', 3),
                        ('d', 8),
                        ('e', 1);
`);

db.aggregate('sumint', {
  start: 0,
  step: (acc, value) =&gt; acc + value,
});

using query = db.prepare('SELECT sumint(y) as total FROM t3');
query.get(); // { total: 21 }
</code></pre>
<h3><code>database.close()</code></h3>
<p>Closes the database connection. An exception is thrown if the database is not
open. An <a href="errors.md#err_invalid_state"><code>ERR_INVALID_STATE</code></a> error is thrown if the method is called while
a statement is executing, such as inside a user-defined function, an aggregate
function, an authorizer callback, or a <a href="diagnostics_channel.md#event-sqlitedbquery"><code>'sqlite.db.query'</code></a> subscriber. This
method is a wrapper around <a href="https://www.sqlite.org/c3ref/close.html"><code>sqlite3_close_v2()</code></a>.</p>
<h3><code>database.loadExtension(path[, entryPoint])</code></h3>
<ul>
<li><code>path</code> {string} The path to the shared library to load.</li>
<li><code>entryPoint</code> {string} The name of the extension's entry-point function. When
omitted, SQLite derives the entry point from the shared library's filename;
pass this argument explicitly when the derived name does not match.</li>
</ul>
<p>Loads a shared library into the database connection. This method is a wrapper
around <a href="https://www.sqlite.org/c3ref/load_extension.html"><code>sqlite3_load_extension()</code></a>. It is required to enable the
<code>allowExtension</code> option when constructing the <code>Database</code> instance.</p>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';
const database = new Database(':memory:', { allowExtension: true });

// Load using the entry point derived from the filename.
database.loadExtension('./decimal.dylib');

// Override the entry point when the derived name does not match.
database.loadExtension('./base64.dylib', 'sqlite3_base64_init');
</code></pre>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');
const database = new Database(':memory:', { allowExtension: true });

// Load using the entry point derived from the filename.
database.loadExtension('./decimal.dylib');

// Override the entry point when the derived name does not match.
database.loadExtension('./base64.dylib', 'sqlite3_base64_init');
</code></pre>
<h3><code>database.enableLoadExtension(allow)</code></h3>
<ul>
<li><code>allow</code> {boolean} Whether to allow loading extensions.</li>
</ul>
<p>Enables or disables the <code>loadExtension</code> SQL function, and the <code>loadExtension()</code>
method. When <code>allowExtension</code> is <code>false</code> when constructing, you cannot enable
loading extensions for security reasons.</p>
<h3><code>database.enableDefensive(active)</code></h3>
<ul>
<li><code>active</code> {boolean} Whether to set the defensive flag.</li>
</ul>
<p>Enables or disables the defensive flag. When the defensive flag is active,
language features that allow ordinary SQL to deliberately corrupt the database file are disabled.
See <a href="https://www.sqlite.org/c3ref/c_dbconfig_defensive.html#sqlitedbconfigdefensive"><code>SQLITE_DBCONFIG_DEFENSIVE</code></a> in the SQLite documentation for details.</p>
<h3><code>database.location([dbName])</code></h3>
<ul>
<li><code>dbName</code> {string} Name of the database. This can be <code>'main'</code> (the default primary database) or any other
database that has been added with <a href="https://www.sqlite.org/lang_attach.html"><code>ATTACH DATABASE</code></a> <strong>Default:</strong> <code>'main'</code>.</li>
<li>Returns: {string | null} The location of the database file. When using an in-memory database,
this method returns null.</li>
</ul>
<p>This method is a wrapper around <a href="https://sqlite.org/c3ref/db_filename.html"><code>sqlite3_db_filename()</code></a></p>
<h3><code>database.exec(sql)</code></h3>
<ul>
<li><code>sql</code> {string} A SQL string to execute.</li>
</ul>
<p>This method allows one or more SQL statements to be executed without returning
any results. This method is useful when executing SQL statements read from a
file. This method is a wrapper around <a href="https://www.sqlite.org/c3ref/exec.html"><code>sqlite3_exec()</code></a>.</p>
<h3><code>database.function(name[, options], fn)</code></h3>
<ul>
<li><code>name</code> {string} The name of the SQLite function to create.</li>
<li><code>options</code> {Object} Optional configuration settings for the function. The
following properties are supported:
<ul>
<li><code>deterministic</code> {boolean} If <code>true</code>, the <a href="https://www.sqlite.org/c3ref/c_deterministic.html"><code>SQLITE_DETERMINISTIC</code></a> flag is
set on the created function. <strong>Default:</strong> <code>false</code>.</li>
<li><code>directOnly</code> {boolean} If <code>true</code>, the <a href="https://www.sqlite.org/c3ref/c_deterministic.html"><code>SQLITE_DIRECTONLY</code></a> flag is set on
the created function. <strong>Default:</strong> <code>false</code>.</li>
<li><code>useBigIntArguments</code> {boolean} If <code>true</code>, integer arguments to <code>function</code>
are converted to <code>BigInt</code>s. If <code>false</code>, integer arguments are passed as
JavaScript numbers. <strong>Default:</strong> <code>false</code>.</li>
<li><code>varargs</code> {boolean} If <code>true</code>, <code>function</code> may be invoked with any number of
arguments (between zero and <a href="https://www.sqlite.org/limits.html#max_function_arg"><code>SQLITE_MAX_FUNCTION_ARG</code></a>). If <code>false</code>,
<code>function</code> must be invoked with exactly <code>function.length</code> arguments, which
must be an integer.
<strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li><code>fn</code> {Function} The JavaScript function to call when the SQLite function is
invoked. The return value of this function should be a valid SQLite data type:
see <a href="#type-conversion-between-javascript-and-sqlite">Type conversion between JavaScript and SQLite</a>. The result defaults to
<code>NULL</code> if the return value is <code>undefined</code>.</li>
</ul>
<p>This method is used to create SQLite user-defined functions. This method is a
wrapper around <a href="https://www.sqlite.org/c3ref/create_function.html"><code>sqlite3_create_function_v2()</code></a>.</p>
<h3><code>database.setAuthorizer(callback)</code></h3>
<ul>
<li><code>callback</code> {Function|null} The authorizer function to set, or <code>null</code> to
clear the current authorizer.</li>
</ul>
<p>Sets an authorizer callback that SQLite will invoke whenever it attempts to
access data or modify the database schema through prepared statements.
This can be used to implement security policies, audit access, or restrict certain operations.
This method is a wrapper around <a href="https://sqlite.org/c3ref/set_authorizer.html"><code>sqlite3_set_authorizer()</code></a>.</p>
<p>When invoked, the callback receives five arguments:</p>
<ul>
<li><code>actionCode</code> {number} The type of operation being performed (e.g.,
<code>SQLITE_INSERT</code>, <code>SQLITE_UPDATE</code>, <code>SQLITE_SELECT</code>).</li>
<li><code>arg1</code> {string|null} The first argument (context-dependent, often a table name).</li>
<li><code>arg2</code> {string|null} The second argument (context-dependent, often a column name).</li>
<li><code>dbName</code> {string|null} The name of the database.</li>
<li><code>triggerOrView</code> {string|null} The name of the trigger or view causing the access.</li>
</ul>
<p>The callback must return one of the following constants:</p>
<ul>
<li><code>SQLITE_OK</code> - Allow the operation.</li>
<li><code>SQLITE_DENY</code> - Deny the operation (causes an error).</li>
<li><code>SQLITE_IGNORE</code> - Ignore the operation (silently skip).</li>
</ul>
<p>SQLite requires that the authorizer callback not modify the database connection
that invoked it, which includes preparing and stepping statements. Methods that
would do so throw an error with code <code>ERR_INVALID_STATE</code> while the callback is
on the stack, including <code>database.prepare()</code>, <code>database.exec()</code>, the execution
methods of that connection's statements, iterators, and tag stores, and
<code>database.setAuthorizer()</code> itself. Other connections remain usable.</p>
<p>The callback can also be invoked from within <code>statement.run()</code>,
<code>statement.get()</code>, and similar methods, because SQLite may re-prepare a
statement during execution after a schema change.</p>
<p>Separately, a statement that is currently being executed cannot be reentered.
Calling <code>statement.close()</code> on it would free the virtual machine that is
running, and re-running it through <code>statement.run()</code>, <code>statement.get()</code>,
<code>statement.all()</code>, <code>statement.iterate()</code>, <code>iterator.next()</code>,
<code>iterator.return()</code>, or the equivalent tag store methods would reset that
virtual machine mid-execution. All of these throw an <code>ERR_INVALID_STATE</code> error
instead. This applies to any callback SQLite invokes during execution, such as a
user-defined function. Other statements on the connection remain usable.</p>
<p>Operations that touch no SQLite state stay available from the callback:
<code>sqlTagStore.clear()</code>, which only drops cached statements, and <code>next()</code> and
<code>return()</code> on an already-drained iterator, which keep returning
<code>{ done: true }</code>.</p>
<pre><code class="language-cjs">const { Database, constants } = require('node:sqlite');
const db = new Database(':memory:');

// Set up an authorizer that denies all table creation
db.setAuthorizer((actionCode) =&gt; {
  if (actionCode === constants.SQLITE_CREATE_TABLE) {
    return constants.SQLITE_DENY;
  }
  return constants.SQLITE_OK;
});

// This will work
using query = db.prepare('SELECT 1');
query.get();

// This will throw an error due to authorization denial
try {
  db.exec('CREATE TABLE blocked (id INTEGER)');
} catch (err) {
  console.log('Operation blocked:', err.message);
}
</code></pre>
<pre><code class="language-mjs">import { Database, constants } from 'node:sqlite';
const db = new Database(':memory:');

// Set up an authorizer that denies all table creation
db.setAuthorizer((actionCode) =&gt; {
  if (actionCode === constants.SQLITE_CREATE_TABLE) {
    return constants.SQLITE_DENY;
  }
  return constants.SQLITE_OK;
});

// This will work
using query = db.prepare('SELECT 1');
query.get();

// This will throw an error due to authorization denial
try {
  db.exec('CREATE TABLE blocked (id INTEGER)');
} catch (err) {
  console.log('Operation blocked:', err.message);
}
</code></pre>
<h3><code>database.isOpen</code></h3>
<ul>
<li>Type: {boolean} Whether the database is currently open or not.</li>
</ul>
<h3><code>database.isTransaction</code></h3>
<ul>
<li>Type: {boolean} Whether the database is currently within a transaction. This method
is a wrapper around <a href="https://sqlite.org/c3ref/get_autocommit.html"><code>sqlite3_get_autocommit()</code></a>.</li>
</ul>
<h3><code>database.limits</code></h3>
<ul>
<li>Type: {Object}</li>
</ul>
<p>An object for getting and setting SQLite database limits at runtime.
Each property corresponds to an SQLite limit and can be read or written.</p>
<pre><code class="language-js">const db = new Database(':memory:');

// Read current limit
console.log(db.limits.length);

// Set a new limit
db.limits.sqlLength = 100000;

// Reset a limit to its compile-time maximum
db.limits.sqlLength = Infinity;
</code></pre>
<p>Available properties: <code>length</code>, <code>sqlLength</code>, <code>column</code>, <code>exprDepth</code>,
<code>compoundSelect</code>, <code>vdbeOp</code>, <code>functionArg</code>, <code>attach</code>, <code>likePatternLength</code>,
<code>variableNumber</code>, <code>triggerDepth</code>.</p>
<p>Setting a property to <code>Infinity</code> resets the limit to its compile-time maximum value.</p>
<h3><code>database.open()</code></h3>
<p>Opens the database specified in the <code>path</code> argument of the <code>Database</code>
constructor. This method should only be used when the database is not opened via
the constructor. An exception is thrown if the database is already open.</p>
<h3><code>database.serialize([dbName])</code></h3>
<ul>
<li><code>dbName</code> {string} Name of the database to serialize. This can be <code>'main'</code>
(the default primary database) or any other database that has been added with
<a href="https://www.sqlite.org/lang_attach.html"><code>ATTACH DATABASE</code></a>. <strong>Default:</strong> <code>'main'</code>.</li>
<li>Returns: {Uint8Array} A binary representation of the database.</li>
</ul>
<p>Serializes the database into a binary representation, returned as a
<code>Uint8Array</code>. This is useful for saving, cloning, or transferring an in-memory
database. This method is a wrapper around <a href="https://sqlite.org/c3ref/serialize.html"><code>sqlite3_serialize()</code></a>.</p>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';

const db = new Database(':memory:');
db.exec('CREATE TABLE t(key INTEGER PRIMARY KEY, value TEXT)');
db.exec(&quot;INSERT INTO t VALUES (1, 'hello')&quot;);
const buffer = db.serialize();
console.log(buffer.length); // Prints the byte length of the database
</code></pre>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');

const db = new Database(':memory:');
db.exec('CREATE TABLE t(key INTEGER PRIMARY KEY, value TEXT)');
db.exec(&quot;INSERT INTO t VALUES (1, 'hello')&quot;);
const buffer = db.serialize();
console.log(buffer.length); // Prints the byte length of the database
</code></pre>
<h3><code>database.deserialize(buffer[, options])</code></h3>
<ul>
<li><code>buffer</code> {Uint8Array} A binary representation of a database, such as the
output of <a href="#databaseserializedbname"><code>database.serialize()</code></a>.</li>
<li><code>options</code> {Object} Optional configuration for the deserialization.
<ul>
<li><code>dbName</code> {string} Name of the database to deserialize into.
<strong>Default:</strong> <code>'main'</code>.</li>
</ul>
</li>
</ul>
<p>Loads a serialized database into this connection, replacing the current
database. The deserialized database is writable. Existing prepared statements
are finalized before deserialization is attempted, even if the operation
subsequently fails. An <a href="errors.md#err_invalid_state"><code>ERR_INVALID_STATE</code></a> error is thrown if the method is
called while a database callback is on the stack, for example a user-defined
function, an aggregate function, an authorizer, or a changeset filter or conflict
handler. This method is a wrapper around <a href="https://sqlite.org/c3ref/deserialize.html"><code>sqlite3_deserialize()</code></a>.</p>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';

const original = new Database(':memory:');
original.exec('CREATE TABLE t(key INTEGER PRIMARY KEY, value TEXT)');
original.exec(&quot;INSERT INTO t VALUES (1, 'hello')&quot;);
const buffer = original.serialize();
original.close();

const clone = new Database(':memory:');
clone.deserialize(buffer);
using query = clone.prepare('SELECT value FROM t');
console.log(query.get());
// Prints: { value: 'hello' }
</code></pre>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');

const original = new Database(':memory:');
original.exec('CREATE TABLE t(key INTEGER PRIMARY KEY, value TEXT)');
original.exec(&quot;INSERT INTO t VALUES (1, 'hello')&quot;);
const buffer = original.serialize();
original.close();

const clone = new Database(':memory:');
clone.deserialize(buffer);
using query = clone.prepare('SELECT value FROM t');
console.log(query.get());
// Prints: { value: 'hello' }
</code></pre>
<h3><code>database.prepare(sql[, options])</code></h3>
<ul>
<li><code>sql</code> {string} A SQL string to compile to a prepared statement.</li>
<li><code>options</code> {Object} Optional configuration for the prepared statement.
<ul>
<li><code>readBigInts</code> {boolean} If <code>true</code>, integer fields are read as <code>BigInt</code>s.
<strong>Default:</strong> inherited from database options or <code>false</code>.</li>
<li><code>returnArrays</code> {boolean} If <code>true</code>, results are returned as arrays.
<strong>Default:</strong> inherited from database options or <code>false</code>.</li>
<li><code>allowBareNamedParameters</code> {boolean} If <code>true</code>, allows binding named
parameters without the prefix character. <strong>Default:</strong> inherited from
database options or <code>true</code>.</li>
<li><code>allowUnknownNamedParameters</code> {boolean} If <code>true</code>, unknown named parameters
are ignored. <strong>Default:</strong> inherited from database options or <code>false</code>.</li>
<li><code>persistent</code> {boolean} If <code>true</code>, hints to SQLite that this statement will
be retained for a long time and likely reused many times. SQLite currently
responds to this hint by avoiding lookaside memory. Corresponds to the
<a href="https://sqlite.org/c3ref/c_prepare_dont_log.html#sqlitepreparepersistent"><code>SQLITE_PREPARE_PERSISTENT</code></a> flag. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li>Returns: {Statement} The prepared statement.</li>
</ul>
<p>Compiles a SQL statement into a <a href="https://www.sqlite.org/c3ref/stmt.html">prepared statement</a>. This method is a wrapper
around <a href="https://www.sqlite.org/c3ref/prepare.html"><code>sqlite3_prepare_v3()</code></a>.</p>
<h3><code>database.createTagStore([maxSize])</code></h3>
<ul>
<li><code>maxSize</code> {integer} The maximum number of prepared statements to cache.
<strong>Default:</strong> <code>1000</code>.</li>
<li>Returns: {SQLTagStore} A new SQL tag store for caching prepared statements.</li>
</ul>
<p>Creates a new <a href="#class-sqltagstore"><code>SQLTagStore</code></a>, which is a Least Recently Used (LRU) cache
for storing prepared statements. This allows for the efficient reuse of
prepared statements by tagging them with a unique identifier.</p>
<p>When a tagged SQL literal is executed, the <code>SQLTagStore</code> checks if a prepared
statement for the corresponding SQL query string already exists in the cache.
If it does, the cached statement is used. If not, a new prepared statement is
created, executed, and then stored in the cache for future use. This mechanism
helps to avoid the overhead of repeatedly parsing and preparing the same SQL
statements.</p>
<p>Tagged statements bind the placeholder values from the template literal as
parameters to the underlying prepared statement. For example:</p>
<pre><code class="language-js">sqlTagStore.get`SELECT ${value}`;
</code></pre>
<p>is equivalent to:</p>
<pre><code class="language-js">using statement = db.prepare('SELECT ?');
statement.get(value);
</code></pre>
<p>However, in the first example, the tag store will cache the underlying prepared
statement for future use.</p>
<blockquote>
<p><strong>Note:</strong> The <code>${value}</code> syntax in tagged statements <em>binds</em> a parameter to
the prepared statement. This differs from its behavior in <em>untagged</em> template
literals, where it performs string interpolation.</p>
<pre><code class="language-js">// This a safe example of binding a parameter to a tagged statement.
sqlTagStore.run`INSERT INTO t1 (id) VALUES (${id})`;

// This is an *unsafe* example of an untagged template string.
// `id` is interpolated into the query text as a string.
// This can lead to SQL injection and data corruption.
db.run(`INSERT INTO t1 (id) VALUES (${id})`);
</code></pre>
</blockquote>
<p>The tag store will match a statement from the cache if the query strings
(including the positions of any bound placeholders) are identical.</p>
<pre><code class="language-js">// The following statements will match in the cache:
sqlTagStore.get`SELECT * FROM t1 WHERE id = ${id} AND active = 1`;
sqlTagStore.get`SELECT * FROM t1 WHERE id = ${12345} AND active = 1`;

// The following statements will not match, as the query strings
// and bound placeholders differ:
sqlTagStore.get`SELECT * FROM t1 WHERE id = ${id} AND active = 1`;
sqlTagStore.get`SELECT * FROM t1 WHERE id = 12345 AND active = 1`;

// The following statements will not match, as matches are case-sensitive:
sqlTagStore.get`SELECT * FROM t1 WHERE id = ${id} AND active = 1`;
sqlTagStore.get`select * from t1 where id = ${id} and active = 1`;
</code></pre>
<p>The only way of binding parameters in tagged statements is with the <code>${value}</code>
syntax. Do not add parameter binding placeholders (<code>?</code> etc.) to the SQL query
string itself.</p>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';

const db = new Database(':memory:');
const sql = db.createTagStore();

db.exec('CREATE TABLE users (id INT, name TEXT)');

// Using the 'run' method to insert data.
// The tagged literal is used to identify the prepared statement.
sql.run`INSERT INTO users VALUES (1, 'Alice')`;
sql.run`INSERT INTO users VALUES (2, 'Bob')`;

// Using the 'get' method to retrieve a single row.
const name = 'Alice';
const user = sql.get`SELECT * FROM users WHERE name = ${name}`;
console.log(user); // { id: 1, name: 'Alice' }

// Using the 'all' method to retrieve all rows.
const allUsers = sql.all`SELECT * FROM users ORDER BY id`;
console.log(allUsers);
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ]
</code></pre>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');

const db = new Database(':memory:');
const sql = db.createTagStore();

db.exec('CREATE TABLE users (id INT, name TEXT)');

// Using the 'run' method to insert data.
// The tagged literal is used to identify the prepared statement.
sql.run`INSERT INTO users VALUES (1, 'Alice')`;
sql.run`INSERT INTO users VALUES (2, 'Bob')`;

// Using the 'get' method to retrieve a single row.
const name = 'Alice';
const user = sql.get`SELECT * FROM users WHERE name = ${name}`;
console.log(user); // { id: 1, name: 'Alice' }

// Using the 'all' method to retrieve all rows.
const allUsers = sql.all`SELECT * FROM users ORDER BY id`;
console.log(allUsers);
// [
//   { id: 1, name: 'Alice' },
//   { id: 2, name: 'Bob' }
// ]
</code></pre>
<h3><code>database.createModule(name, options)</code></h3>
<ul>
<li><code>name</code> {string} The name of the virtual table module. This name is used in
<code>CREATE VIRTUAL TABLE ... USING name</code> statements and as an eponymous table
name.</li>
<li><code>options</code> {Object} Module configuration settings.
<ul>
<li><code>columns</code> {Array} An array of column definitions. Each element is an object
with the following properties:
<ul>
<li><code>name</code> {string} The name of the column.</li>
<li><code>type</code> {string} The declared type of the column. Must be one of
<code>'INTEGER'</code>, <code>'TEXT'</code>, <code>'REAL'</code>, <code>'BLOB'</code>, or <code>'ANY'</code>.</li>
<li><code>hidden</code> {boolean} If <code>true</code>, the column is hidden and acts as a
parameter for table-valued function usage. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
<li><code>rows</code> {Function} A function called to produce rows when the virtual table
is queried. The function receives values for hidden columns (parameters) as
arguments, in the order they are defined. Must return an iterable (such as
an array or generator) where each element is an array of column values.</li>
<li><code>directOnly</code> {boolean} If <code>true</code>, the virtual table can only be used in
top-level SQL statements and cannot be used inside triggers or views.
<strong>Default:</strong> <code>false</code>.</li>
<li><code>useBigIntArguments</code> {boolean} If <code>true</code>, integer parameters passed to
<code>rows</code> are converted to <code>BigInt</code>s. <strong>Default:</strong> <code>false</code>.</li>
</ul>
</li>
</ul>
<p>Registers a virtual table module with the database. This method is a wrapper
around <a href="https://www.sqlite.org/c3ref/create_module.html"><code>sqlite3_create_module_v2()</code></a>. Virtual tables allow JavaScript code
to provide the backing data for SQL tables. The registered module can be used
in two ways:</p>
<ul>
<li><strong>Eponymous table</strong>: Query the module name directly without creating a table
(e.g., <code>SELECT * FROM module_name</code>).</li>
<li><strong>Named virtual table</strong>: Use <code>CREATE VIRTUAL TABLE t USING module_name</code> to
create a persistent virtual table.</li>
</ul>
<p>Hidden columns can be used to pass parameters to the <code>rows</code> function using
table-valued function syntax (e.g., <code>SELECT * FROM module_name(param1, param2)</code>).</p>
<p>Values yielded by <code>rows</code> follow the conversion rules in <a href="#type-conversion-between-javascript-and-sqlite">Type conversion between
JavaScript and SQLite</a>: a {number} is stored as <code>REAL</code> and a {bigint} is
stored as <code>INTEGER</code>, regardless of the column's declared <code>type</code>. Unlike an
ordinary table, a virtual table does not apply column affinity to the values it
returns, so yield a {bigint} when a column needs <code>INTEGER</code> storage:</p>
<pre><code class="language-js">db.createModule('counter', {
  columns: [{ name: 'value', type: 'INTEGER' }],
  *rows() {
    yield [1];   // typeof(value) is 'real'
    yield [2n];  // typeof(value) is 'integer'
  },
});
</code></pre>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');

const db = new Database(':memory:');

db.createModule('generate_series', {
  columns: [
    { name: 'value', type: 'INTEGER' },
    { name: 'start', type: 'INTEGER', hidden: true },
    { name: 'stop', type: 'INTEGER', hidden: true },
    { name: 'step', type: 'INTEGER', hidden: true },
  ],
  *rows(start, stop, step) {
    start ??= 0;
    stop ??= 10;
    step ??= 1;
    for (let i = start; i &lt;= stop; i += step) {
      yield [i];
    }
  },
});

console.log(db.prepare('SELECT * FROM generate_series(1, 5, 1)').all());
// Prints: [ { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 } ]
</code></pre>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';

const db = new Database(':memory:');

db.createModule('generate_series', {
  columns: [
    { name: 'value', type: 'INTEGER' },
    { name: 'start', type: 'INTEGER', hidden: true },
    { name: 'stop', type: 'INTEGER', hidden: true },
    { name: 'step', type: 'INTEGER', hidden: true },
  ],
  *rows(start, stop, step) {
    start ??= 0;
    stop ??= 10;
    step ??= 1;
    for (let i = start; i &lt;= stop; i += step) {
      yield [i];
    }
  },
});

console.log(db.prepare('SELECT * FROM generate_series(1, 5, 1)').all());
// Prints: [ { value: 1 }, { value: 2 }, { value: 3 }, { value: 4 }, { value: 5 } ]
</code></pre>
<h3><code>database.createSession([options])</code></h3>
<ul>
<li><code>options</code> {Object} The configuration options for the session.
<ul>
<li><code>table</code> {string} A specific table to track changes for. By default, changes to all tables are tracked.</li>
<li><code>db</code> {string} Name of the database to track. This is useful when multiple databases have been added using <a href="https://www.sqlite.org/lang_attach.html"><code>ATTACH DATABASE</code></a>. <strong>Default</strong>: <code>'main'</code>.</li>
</ul>
</li>
<li>Returns: {Session} A session handle.</li>
</ul>
<p>Creates and attaches a session to the database. This method is a wrapper around <a href="https://www.sqlite.org/session/sqlite3session_create.html"><code>sqlite3session_create()</code></a> and <a href="https://www.sqlite.org/session/sqlite3session_attach.html"><code>sqlite3session_attach()</code></a>.</p>
<h3><code>database.applyChangeset(changeset[, options])</code></h3>
<ul>
<li>
<p><code>changeset</code> {Uint8Array} A binary changeset or patchset.</p>
</li>
<li>
<p><code>options</code> {Object} The configuration options for how the changes will be applied.</p>
<ul>
<li>
<p><code>filter</code> {Function} for each table affected by at least
one change in the changeset, the <code>filter</code> callback is invoked with the
table name as the first argument. If the return value is falsy, then no
attempt is made to apply any changes to the table.
Otherwise, if the return value is truthy or no <code>filter</code> callback is provided,
all changes related to the table are attempted.</p>
</li>
<li>
<p><code>onConflict</code> {Function} A function that determines how to handle conflicts. The function receives one argument,
which can be one of the following values:</p>
<ul>
<li><code>SQLITE_CHANGESET_DATA</code>: A <code>DELETE</code> or <code>UPDATE</code> change does not contain the expected &quot;before&quot; values.</li>
<li><code>SQLITE_CHANGESET_NOTFOUND</code>: A row matching the primary key of the <code>DELETE</code> or <code>UPDATE</code> change does not exist.</li>
<li><code>SQLITE_CHANGESET_CONFLICT</code>: An <code>INSERT</code> change results in a duplicate primary key.</li>
<li><code>SQLITE_CHANGESET_FOREIGN_KEY</code>: Applying a change would result in a foreign key violation.</li>
<li><code>SQLITE_CHANGESET_CONSTRAINT</code>: Applying a change results in a <code>UNIQUE</code>, <code>CHECK</code>, or <code>NOT NULL</code> constraint
violation.</li>
</ul>
<p>The function should return one of the following values:</p>
<ul>
<li><code>SQLITE_CHANGESET_OMIT</code>: Omit conflicting changes.</li>
<li><code>SQLITE_CHANGESET_REPLACE</code>: Replace existing values with conflicting changes (only valid with
<code>SQLITE_CHANGESET_DATA</code> or <code>SQLITE_CHANGESET_CONFLICT</code> conflicts).</li>
<li><code>SQLITE_CHANGESET_ABORT</code>: Abort on conflict and roll back the database.</li>
</ul>
<p>When an error is thrown in the conflict handler or when any other value is returned from the handler,
applying the changeset is aborted and the database is rolled back.</p>
<p><strong>Default</strong>: A function that returns <code>SQLITE_CHANGESET_ABORT</code>.</p>
</li>
</ul>
</li>
<li>
<p>Returns: {boolean} Whether the changeset was applied successfully without being aborted.</p>
</li>
</ul>
<p>An exception is thrown if the database is not
open. This method is a wrapper around <a href="https://www.sqlite.org/session/sqlite3changeset_apply.html"><code>sqlite3changeset_apply()</code></a>.</p>
<pre><code class="language-mjs">import { Database } from 'node:sqlite';

const sourceDb = new Database(':memory:');
const targetDb = new Database(':memory:');

sourceDb.exec('CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)');
targetDb.exec('CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)');

const session = sourceDb.createSession();

using insert = sourceDb.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
insert.run(1, 'hello');
insert.run(2, 'world');

const changeset = session.changeset();
targetDb.applyChangeset(changeset);
// Now that the changeset has been applied, targetDb contains the same data as sourceDb.
</code></pre>
<pre><code class="language-cjs">const { Database } = require('node:sqlite');

const sourceDb = new Database(':memory:');
const targetDb = new Database(':memory:');

sourceDb.exec('CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)');
targetDb.exec('CREATE TABLE data(key INTEGER PRIMARY KEY, value TEXT)');

const session = sourceDb.createSession();

using insert = sourceDb.prepare('INSERT INTO data (key, value) VALUES (?, ?)');
insert.run(1, 'hello');
insert.run(2, 'world');

const changeset = session.changeset();
targetDb.applyChangeset(changeset);
// Now that the changeset has been applied, targetDb contains the same data as sourceDb.
</code></pre>
<h3><code>database[Symbol.dispose]()</code></h3>
<p>Closes the database connection. If the database connection is already closed
then this is a no-op.</p>
<h2>Class: <code>Session</code></h2>
<h3><code>session.changeset()</code></h3>
<ul>
<li>Returns: {Uint8Array} Binary changeset that can be applied to other databases.</li>
</ul>
<p>Retrieves a changeset containing all changes since the changeset was created. Can be called multiple times.
An exception is thrown if the database or the session is not open. This method is a wrapper around <a href="https://www.sqlite.org/session/sqlite3session_changeset.html"><code>sqlite3session_changeset()</code></a>.</p>
<h3><code>session.patchset()</code></h3>
<ul>
<li>Returns: {Uint8Array} Binary patchset that can be applied to other databases.</li>
</ul>
<p>Similar to the method above, but generates a more compact patchset. See <a href="https://www.sqlite.org/sessionintro.html#changesets_and_patchsets">Changesets and Patchsets</a>
in the documentation of SQLite. An exception is thrown if the database or the session is not open. This method is a
wrapper around <a href="https://www.sqlite.org/session/sqlite3session_patchset.html"><code>sqlite3session_patchset()</code></a>.</p>
<h3><code>session.close()</code></h3>
<p>Closes the session. An exception is thrown if the database or the session is not open,
or if the session is currently generating a changeset or patchset. An
<a href="errors.md#err_invalid_state"><code>ERR_INVALID_STATE</code></a> error is thrown if the method is called from a callback that
SQLite invoked, such as an authorizer callback, a user-defined function, or a
<a href="diagnostics_channel.md#event-sqlitedbquery"><code>'sqlite.db.query'</code></a> subscriber, because SQLite may still be using the session.
This method is a wrapper around <a href="https://www.sqlite.org/session/sqlite3session_delete.html"><code>sqlite3session_delete()</code></a>.</p>
<h3><code>session[Symbol.dispose]()</code></h3>
<p>Closes the session. If the session is already closed, then this is a no-op. An
<a href="errors.md#err_invalid_state"><code>ERR_INVALID_STATE</code></a> error is thrown if the session is currently generating
a changeset or patchset, or if the method is called from a callback that SQLite
invoked, under the same conditions as <a href="#sessionclose"><code>session.close()</code></a>.</p>
<h2>Class: <code>Statement</code></h2>
<p>This class represents a single <a href="https://www.sqlite.org/c3ref/stmt.html">prepared statement</a>. This class cannot be
instantiated via its constructor. Instead, instances are created via the
<code>database.prepare()</code> method. All APIs exposed by this class execute
synchronously.</p>
<p><code>StatementSync</code> is a deprecated alias for <code>Statement</code>, kept for backward
compatibility with the class's previous name. See
<a href="deprecations.md#dep0211-sqlitestatementsync">DEP0211</a>.</p>
<p>A prepared statement is an efficient binary representation of the SQL used to
create it. Prepared statements are parameterizable, and can be invoked multiple
times with different bound values. Parameters also offer protection against
<a href="https://en.wikipedia.org/wiki/SQL_injection">SQL injection</a> attacks. For these reasons, prepared statements are preferred
over hand-crafted SQL strings when handling user input.</p>
<h3>Binding parameters</h3>
<p>The <code>all()</code>, <code>get()</code>, <code>iterate()</code>, and <code>run()</code> methods bind their arguments to
the parameters of the prepared statement before executing it. Parameters are
either anonymous or named.</p>
<p>Anonymous parameters are written as <code>?</code> in SQL and are bound in order from the
arguments passed to the method. The <code>?NNN</code> form assigns SQLite parameter index
<code>NNN</code> to a placeholder. Avoid mixing numbered and named parameters because they
share parameter indexes.</p>
<pre><code class="language-js">db.prepare('SELECT ? AS a, ? AS b').get('x', 42);
// { a: 'x', b: 42 }
db.prepare('SELECT ?2 AS a, ?1 AS b').get('first', 'second');
// { a: 'second', b: 'first' }
</code></pre>
<p>Named parameters begin with one of the prefix characters <code>$</code>, <code>:</code>, or <code>@</code> in
SQL. They are bound from an object passed as the first argument. Repeating a
name in the SQL binds the same value to every occurrence.</p>
<pre><code class="language-js">db.prepare('SELECT $a AS a, $b AS b').get({ $a: 1, $b: 2 });
// { a: 1, b: 2 }
db.prepare('SELECT :a AS a').get({ ':a': 1 });
// { a: 1 }
db.prepare('SELECT @a AS a').get({ '@a': 1 });
// { a: 1 }
db.prepare('SELECT $k AS a, $k AS b').get({ k: 7 });
// { a: 7, b: 7 }
</code></pre>
<p>The last example omits the prefix character from the object key. Bare names are
allowed by default; see <a href="#statementsetallowbarenamedparametersenabled"><code>statement.setAllowBareNamedParameters()</code></a> for their
caveats.</p>
<p>Binding a key that does not name a parameter of the statement throws an
<code>ERR_INVALID_STATE</code> error unless unknown named parameters are ignored. See
<a href="#statementsetallowunknownnamedparametersenabled"><code>statement.setAllowUnknownNamedParameters()</code></a>.</p>
<p>Parameters that are never bound are <code>NULL</code>, and binding <code>undefined</code> has the same
effect, so <code>{ $a: undefined }</code> and <code>{}</code> are equivalent. Because <code>undefined</code> is
not an object, passing it in place of <code>namedParameters</code> binds it as an anonymous
parameter instead.</p>
<p>See <a href="#type-conversion-between-javascript-and-sqlite">Type conversion between JavaScript and SQLite</a> for the values that can be
bound. Binding any other value throws an <code>ERR_INVALID_ARG_TYPE</code> error.</p>
<h3><code>statement.all([namedParameters][, ...anonymousParameters])</code></h3>
<ul>
<li><code>namedParameters</code> {Object} An optional object used to bind named parameters.
The keys of this object are used to configure the mapping.</li>
<li><code>...anonymousParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Zero or more values to bind to anonymous parameters.</li>
<li>Returns: {Array} An array of objects. Each object corresponds to a row
returned by executing the prepared statement. The keys and values of each
object correspond to the column names and values of the row.</li>
</ul>
<p>This method executes a prepared statement and returns all results as an array of
objects. If the prepared statement does not return any results, this method
returns an empty array. The prepared statement <a href="https://www.sqlite.org/c3ref/bind_blob.html">parameters are bound</a> using
the values in <code>namedParameters</code> and <code>anonymousParameters</code>. See
<a href="#binding-parameters">Binding parameters</a>.</p>
<h3><code>statement.close()</code></h3>
<p>Finalizes the prepared statement. An exception is thrown if the statement is
already finalized. An <a href="errors.md#err_invalid_state"><code>ERR_INVALID_STATE</code></a> error is thrown if this statement
is currently executing, which happens when the method is called from a callback
that the statement itself triggered, such as a user-defined function, an
aggregate function, or a <a href="diagnostics_channel.md#event-sqlitedbquery"><code>'sqlite.db.query'</code></a> subscriber. Idle statements
on the same connection can be finalized from such a callback. This method is a
wrapper around <a href="https://www.sqlite.org/c3ref/finalize.html"><code>sqlite3_finalize()</code></a>.</p>
<h3><code>statement.columns()</code></h3>
<ul>
<li>Returns: {Array} An array of objects. Each object corresponds to a column
in the prepared statement, and contains the following properties:
<ul>
<li><code>column</code> {string|null} The unaliased name of the column in the origin
table, or <code>null</code> if the column is the result of an expression or subquery.
This property is the result of <a href="https://www.sqlite.org/c3ref/column_database_name.html"><code>sqlite3_column_origin_name()</code></a>.</li>
<li><code>database</code> {string|null} The unaliased name of the origin database, or
<code>null</code> if the column is the result of an expression or subquery. This
property is the result of <a href="https://www.sqlite.org/c3ref/column_database_name.html"><code>sqlite3_column_database_name()</code></a>.</li>
<li><code>name</code> {string} The name assigned to the column in the result set of a
<code>SELECT</code> statement. This property is the result of
<a href="https://www.sqlite.org/c3ref/column_name.html"><code>sqlite3_column_name()</code></a>.</li>
<li><code>table</code> {string|null} The unaliased name of the origin table, or <code>null</code> if
the column is the result of an expression or subquery. This property is the
result of <a href="https://www.sqlite.org/c3ref/column_database_name.html"><code>sqlite3_column_table_name()</code></a>.</li>
<li><code>type</code> {string|null} The declared data type of the column, or <code>null</code> if the
column is the result of an expression or subquery. This property is the
result of <a href="https://www.sqlite.org/c3ref/column_decltype.html"><code>sqlite3_column_decltype()</code></a>.</li>
</ul>
</li>
</ul>
<p>This method is used to retrieve information about the columns returned by the
prepared statement.</p>
<h3><code>statement.expandedSQL</code></h3>
<ul>
<li>Type: {string} The source SQL expanded to include parameter values.</li>
</ul>
<p>The source SQL text of the prepared statement with parameter
placeholders replaced by the values that were used during the most recent
execution of this prepared statement. This property is a wrapper around
<a href="https://www.sqlite.org/c3ref/expanded_sql.html"><code>sqlite3_expanded_sql()</code></a>.</p>
<h3><code>statement.get([namedParameters][, ...anonymousParameters])</code></h3>
<ul>
<li><code>namedParameters</code> {Object} An optional object used to bind named parameters.
The keys of this object are used to configure the mapping.</li>
<li><code>...anonymousParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Zero or more values to bind to anonymous parameters.</li>
<li>Returns: {Object|undefined} An object corresponding to the first row returned
by executing the prepared statement. The keys and values of the object
correspond to the column names and values of the row. If no rows were returned
from the database then this method returns <code>undefined</code>.</li>
</ul>
<p>This method executes a prepared statement and returns the first result as an
object. If the prepared statement does not return any results, this method
returns <code>undefined</code>. The prepared statement <a href="https://www.sqlite.org/c3ref/bind_blob.html">parameters are bound</a> using the
values in <code>namedParameters</code> and <code>anonymousParameters</code>. See
<a href="#binding-parameters">Binding parameters</a>.</p>
<h3><code>statement.iterate([namedParameters][, ...anonymousParameters])</code></h3>
<ul>
<li><code>namedParameters</code> {Object} An optional object used to bind named parameters.
The keys of this object are used to configure the mapping.</li>
<li><code>...anonymousParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Zero or more values to bind to anonymous parameters.</li>
<li>Returns: {Iterator} An iterable iterator of objects. Each object corresponds to a row
returned by executing the prepared statement. The keys and values of each
object correspond to the column names and values of the row.</li>
</ul>
<p>This method executes a prepared statement and returns an iterator of
objects. If the prepared statement does not return any results, this method
returns an empty iterator. The prepared statement <a href="https://www.sqlite.org/c3ref/bind_blob.html">parameters are bound</a> using
the values in <code>namedParameters</code> and <code>anonymousParameters</code>. See
<a href="#binding-parameters">Binding parameters</a>.</p>
<h3><code>statement.resetStats()</code></h3>
<p>Resets every counter reported by <a href="#statementstatcounter"><code>statement.stat()</code></a> back to zero, except
<code>memused</code>, which reports current memory usage and cannot be reset. This
method is a wrapper around <a href="https://www.sqlite.org/c3ref/stmt_status.html"><code>sqlite3_stmt_status()</code></a> and is useful for
measuring a specific workload without the counts accumulated by earlier
executions of the same prepared statement.</p>
<h3><code>statement.run([namedParameters][, ...anonymousParameters])</code></h3>
<ul>
<li><code>namedParameters</code> {Object} An optional object used to bind named parameters.
The keys of this object are used to configure the mapping.</li>
<li><code>...anonymousParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Zero or more values to bind to anonymous parameters.</li>
<li>Returns: {Object}
<ul>
<li><code>changes</code> {number|bigint} The number of rows modified, inserted, or deleted
by the most recently completed <code>INSERT</code>, <code>UPDATE</code>, or <code>DELETE</code> statement.
This field is either a number or a <code>BigInt</code> depending on the prepared
statement's configuration. This property is the result of
<a href="https://www.sqlite.org/c3ref/changes.html"><code>sqlite3_changes64()</code></a>.</li>
<li><code>lastInsertRowid</code> {number|bigint} The most recently inserted rowid. This
field is either a number or a <code>BigInt</code> depending on the prepared statement's
configuration. This property is the result of
<a href="https://www.sqlite.org/c3ref/last_insert_rowid.html"><code>sqlite3_last_insert_rowid()</code></a>.</li>
</ul>
</li>
</ul>
<p>This method executes a prepared statement and returns an object summarizing the
resulting changes. The prepared statement <a href="https://www.sqlite.org/c3ref/bind_blob.html">parameters are bound</a> using the
values in <code>namedParameters</code> and <code>anonymousParameters</code>. See
<a href="#binding-parameters">Binding parameters</a>.</p>
<h3><code>statement.setAllowBareNamedParameters(enabled)</code></h3>
<ul>
<li><code>enabled</code> {boolean} Enables or disables support for binding named parameters
without the prefix character.</li>
</ul>
<p>The names of SQLite parameters begin with a prefix character. However, with the
exception of the dollar sign character, these prefix characters also require
extra quoting when used in object keys.</p>
<p>To improve ergonomics, <code>node:sqlite</code> allows bare named parameters, which do not
require the prefix character in JavaScript code, by default. This method can be
used to disable that behavior, requiring the prefix character when binding.
There are several caveats to be aware of when bare named parameters are
allowed:</p>
<ul>
<li>The prefix character is still required in SQL.</li>
<li>The prefix character is still allowed in JavaScript. In fact, prefixed names
will have slightly better binding performance.</li>
<li>Using ambiguous named parameters, such as <code>$k</code> and <code>@k</code>, in the same prepared
statement will result in an exception as it cannot be determined how to bind
a bare name.</li>
</ul>
<h3><code>statement.setAllowUnknownNamedParameters(enabled)</code></h3>
<ul>
<li><code>enabled</code> {boolean} Enables or disables support for unknown named parameters.</li>
</ul>
<p>By default, if an unknown name is encountered while binding parameters, an
exception is thrown. This method allows unknown named parameters to be ignored.</p>
<h3><code>statement.setReturnArrays(enabled)</code></h3>
<ul>
<li><code>enabled</code> {boolean} Enables or disables the return of query results as arrays.</li>
</ul>
<p>When enabled, query results returned by the <code>all()</code>, <code>get()</code>, and <code>iterate()</code> methods will be returned as arrays instead
of objects.</p>
<h3><code>statement.setReadBigInts(enabled)</code></h3>
<ul>
<li><code>enabled</code> {boolean} Enables or disables the use of <code>BigInt</code>s when reading
<code>INTEGER</code> fields from the database.</li>
</ul>
<p>When reading from the database, SQLite <code>INTEGER</code>s are mapped to JavaScript
numbers by default. However, SQLite <code>INTEGER</code>s can store values larger than
JavaScript numbers are capable of representing. In such cases, this method can
be used to read <code>INTEGER</code> data using JavaScript <code>BigInt</code>s. This method has no
impact on database write operations where numbers and <code>BigInt</code>s are both
supported at all times.</p>
<h3><code>statement.sourceSQL</code></h3>
<ul>
<li>Type: {string} The source SQL used to create this prepared statement.</li>
</ul>
<p>The source SQL text of the prepared statement. This property is a
wrapper around <a href="https://www.sqlite.org/c3ref/expanded_sql.html"><code>sqlite3_sql()</code></a>.</p>
<h3><code>statement[Symbol.dispose]()</code></h3>
<p>Finalizes the prepared statement. If the prepared statement is already
finalized, then this is a no-op. An <a href="errors.md#err_invalid_state"><code>ERR_INVALID_STATE</code></a> error is thrown if
this statement is currently executing, under the same conditions as
<a href="#statementclose"><code>statement.close()</code></a>.</p>
<h3><code>statement.stat(counter)</code></h3>
<ul>
<li>
<p><code>counter</code> {string} The name of the counter to read. One of:</p>
<ul>
<li><code>'fullscanStep'</code> The number of times SQLite has stepped forward in a table
as part of a full table scan.</li>
<li><code>'sort'</code> The number of sort operations that have occurred.</li>
<li><code>'autoindex'</code> The number of rows inserted into transient indices that were
created automatically to help joins run faster.</li>
<li><code>'vmStep'</code> The number of virtual machine operations executed by the
prepared statement.</li>
<li><code>'reprepare'</code> The number of times the statement has been automatically
reprepared due to schema changes or changes to bound parameters.</li>
<li><code>'run'</code> The number of execution cycles started by the prepared statement.</li>
<li><code>'filterMiss'</code> The number of times the Bloom filter returned a result that
required the join step to be processed as normal.</li>
<li><code>'filterHit'</code> The number of times a join step was bypassed because a Bloom
filter returned not-found.</li>
<li><code>'memused'</code> The approximate number of bytes of heap memory used to store
the prepared statement.</li>
</ul>
</li>
<li>
<p>Returns: {number} The current value of the requested counter.</p>
</li>
</ul>
<p>Returns one of the runtime counters that SQLite tracks for this prepared
statement. This method is a wrapper around <a href="https://www.sqlite.org/c3ref/stmt_status.html"><code>sqlite3_stmt_status()</code></a> and does
not reset the counter. Asserting that a statement does not perform a full table
scan (<code>statement.stat('fullscanStep') === 0</code>) is a useful check to guard
against degenerate performance.</p>
<p>The <code>'filterMiss'</code> and <code>'filterHit'</code> counters require SQLite 3.38.0 or later.
Builds linked against an older SQLite with <code>--shared-sqlite</code> do not expose them,
and passing either name throws <code>ERR_INVALID_ARG_VALUE</code>.</p>
<h2>Class: <code>SQLTagStore</code></h2>
<p>This class represents a single LRU (Least Recently Used) cache for storing
prepared statements.</p>
<p>Instances of this class are created via the <a href="#databasecreatetagstoremaxsize"><code>database.createTagStore()</code></a>
method, not by using a constructor. The store caches prepared statements based
on the provided SQL query string. When the same query is seen again, the store
retrieves the cached statement and safely applies the new values through
parameter binding, thereby preventing attacks like SQL injection.</p>
<p>The cache has a maxSize that defaults to 1000 statements, but a custom size can
be provided (e.g., <code>database.createTagStore(100)</code>). All APIs exposed by this
class execute synchronously.</p>
<h3><code>sqlTagStore.all(stringElements[, ...boundParameters])</code></h3>
<ul>
<li><code>stringElements</code> {string[]} Template literal elements containing the SQL
query.</li>
<li><code>...boundParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Parameter values to be bound to placeholders in the template string.</li>
<li>Returns: {Array} An array of objects representing the rows returned by the query.</li>
</ul>
<p>Executes the given SQL query and returns all resulting rows as an array of
objects.</p>
<p>This function is intended to be used as a template literal tag, not to be
called directly.</p>
<h3><code>sqlTagStore.get(stringElements[, ...boundParameters])</code></h3>
<ul>
<li><code>stringElements</code> {string[]} Template literal elements containing the SQL
query.</li>
<li><code>...boundParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Parameter values to be bound to placeholders in the template string.</li>
<li>Returns: {Object | undefined} An object representing the first row returned by
the query, or <code>undefined</code> if no rows are returned.</li>
</ul>
<p>Executes the given SQL query and returns the first resulting row as an object.</p>
<p>This function is intended to be used as a template literal tag, not to be
called directly.</p>
<h3><code>sqlTagStore.iterate(stringElements[, ...boundParameters])</code></h3>
<ul>
<li><code>stringElements</code> {string[]} Template literal elements containing the SQL
query.</li>
<li><code>...boundParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Parameter values to be bound to placeholders in the template string.</li>
<li>Returns: {Iterator} An iterator that yields objects representing the rows returned by the query.</li>
</ul>
<p>Executes the given SQL query and returns an iterator over the resulting rows.</p>
<p>This function is intended to be used as a template literal tag, not to be
called directly.</p>
<h3><code>sqlTagStore.run(stringElements[, ...boundParameters])</code></h3>
<ul>
<li><code>stringElements</code> {string[]} Template literal elements containing the SQL
query.</li>
<li><code>...boundParameters</code>
{undefined|null|number|bigint|boolean|string|Buffer|TypedArray|DataView|ArrayBuffer|SharedArrayBuffer}
Parameter values to be bound to placeholders in the template string.</li>
<li>Returns: {Object} An object containing information about the execution, including <code>changes</code> and <code>lastInsertRowid</code>.</li>
</ul>
<p>Executes the given SQL query, which is expected to not return any rows (e.g., INSERT, UPDATE, DELETE).</p>
<p>This function is intended to be used as a template literal tag, not to be
called directly.</p>
<h3><code>sqlTagStore.size</code></h3>
<ul>
<li>Type: {integer}</li>
</ul>
<p>A read-only property that returns the number of prepared statements currently in the cache.</p>
<h3><code>sqlTagStore.capacity</code></h3>
<ul>
<li>Type: {integer}</li>
</ul>
<p>A read-only property that returns the maximum number of prepared statements the cache can hold.</p>
<h3><code>sqlTagStore.db</code></h3>
<ul>
<li>Type: {Database}</li>
</ul>
<p>A read-only property that returns the <code>Database</code> object associated with this <code>SQLTagStore</code>.</p>
<h3><code>sqlTagStore.clear()</code></h3>
<p>Resets the LRU cache, clearing all stored prepared statements.</p>
<h2><code>sqlite.backup(sourceDb, path[, options])</code></h2>
<ul>
<li><code>sourceDb</code> {Database} The database to backup. The source database must be open.</li>
<li><code>path</code> {string | Buffer | URL} The path where the backup will be created. If the file already exists,
the contents will be overwritten.</li>
<li><code>options</code> {Object} Optional configuration for the backup. The
following properties are supported:
<ul>
<li><code>source</code> {string} Name of the source database. This can be <code>'main'</code> (the default primary database) or any other
database that have been added with <a href="https://www.sqlite.org/lang_attach.html"><code>ATTACH DATABASE</code></a> <strong>Default:</strong> <code>'main'</code>.</li>
<li><code>target</code> {string} Name of the target database. This can be <code>'main'</code> (the default primary database) or any other
database that have been added with <a href="https://www.sqlite.org/lang_attach.html"><code>ATTACH DATABASE</code></a> <strong>Default:</strong> <code>'main'</code>.</li>
<li><code>rate</code> {integer} Positive number of pages to be transmitted in each batch of the backup. <strong>Default:</strong> <code>100</code>.</li>
<li><code>progress</code> {Function} An optional callback function that will be called after each backup step. The argument passed
to this callback is an {Object} with <code>remainingPages</code> and <code>totalPages</code> properties, describing the current progress
of the backup operation.</li>
</ul>
</li>
<li>Returns: {Promise} A promise that fulfills with the total number of backed-up pages upon completion, or rejects if an
error occurs.</li>
</ul>
<p>This method makes a database backup. This method abstracts the <a href="https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backupinit"><code>sqlite3_backup_init()</code></a>, <a href="https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backupstep"><code>sqlite3_backup_step()</code></a>
and <a href="https://www.sqlite.org/c3ref/backup_finish.html#sqlite3backupfinish"><code>sqlite3_backup_finish()</code></a> functions.</p>
<p>The backed-up database can be used normally during the backup process. Mutations coming from the same connection - same
{Database} - object will be reflected in the backup right away. However, mutations from other connections will cause
the backup process to restart.</p>
<pre><code class="language-cjs">const { backup, Database } = require('node:sqlite');

(async () =&gt; {
  const sourceDb = new Database('source.db');
  const totalPagesTransferred = await backup(sourceDb, 'backup.db', {
    rate: 1, // Copy one page at a time.
    progress: ({ totalPages, remainingPages }) =&gt; {
      console.log('Backup in progress', { totalPages, remainingPages });
    },
  });

  console.log('Backup completed', totalPagesTransferred);
})();
</code></pre>
<pre><code class="language-mjs">import { backup, Database } from 'node:sqlite';

const sourceDb = new Database('source.db');
const totalPagesTransferred = await backup(sourceDb, 'backup.db', {
  rate: 1, // Copy one page at a time.
  progress: ({ totalPages, remainingPages }) =&gt; {
    console.log('Backup in progress', { totalPages, remainingPages });
  },
});

console.log('Backup completed', totalPagesTransferred);
</code></pre>
<h2><code>sqlite.constants</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>An object containing commonly used constants for SQLite operations.</p>
<h3>SQLite constants</h3>
<p>The following constants are exported by the <code>sqlite.constants</code> object.</p>
<h4>Conflict resolution constants</h4>
<p>One of the following constants is available as an argument to the <code>onConflict</code>
conflict resolution handler passed to <a href="#databaseapplychangesetchangeset-options"><code>database.applyChangeset()</code></a>. See also
<a href="https://www.sqlite.org/session/c_changeset_conflict.html">Constants Passed To The Conflict Handler</a> in the SQLite documentation.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_DATA&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The conflict handler is invoked with this constant when processing a DELETE or UPDATE change if a row with the required PRIMARY KEY fields is present in the database, but one or more other (non primary-key) fields modified by the update do not contain the expected &quot;before&quot; values.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_NOTFOUND&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The conflict handler is invoked with this constant when processing a DELETE or UPDATE change if a row with the required PRIMARY KEY fields is not present in the database.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_CONFLICT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;This constant is passed to the conflict handler while processing an INSERT change if the operation would result in duplicate primary key values.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_CONSTRAINT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;If any other constraint violation occurs while applying a change (i.e. a UNIQUE, CHECK or NOT NULL constraint), the conflict handler is invoked with this constant.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_FOREIGN_KEY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;If foreign key handling is enabled, and applying a changeset leaves the database in a state containing foreign key violations, the conflict handler is invoked with this constant exactly once before the changeset is committed. If the conflict handler returns &lt;code&gt;SQLITE_CHANGESET_OMIT&lt;/code&gt;, the changes, including those that caused the foreign key constraint violation, are committed. Or, if it returns &lt;code&gt;SQLITE_CHANGESET_ABORT&lt;/code&gt;, the changeset is rolled back.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<p>One of the following constants must be returned from the <code>onConflict</code> conflict
resolution handler passed to <a href="#databaseapplychangesetchangeset-options"><code>database.applyChangeset()</code></a>. See also
<a href="https://www.sqlite.org/session/c_changeset_abort.html">Constants Returned From The Conflict Handler</a> in the SQLite documentation.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_OMIT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Conflicting changes are omitted.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_REPLACE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Conflicting changes replace existing values. Note that this value can only be returned when the type of conflict is either &lt;code&gt;SQLITE_CHANGESET_DATA&lt;/code&gt; or &lt;code&gt;SQLITE_CHANGESET_CONFLICT&lt;/code&gt;.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CHANGESET_ABORT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Abort when a change encounters a conflict and roll back database.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h4>Authorization constants</h4>
<p>The following constants are used with the <a href="#databasesetauthorizercallback"><code>database.setAuthorizer()</code></a> method.</p>
<h5>Authorization result codes</h5>
<p>One of the following constants must be returned from the authorizer callback
function passed to <a href="#databasesetauthorizercallback"><code>database.setAuthorizer()</code></a>.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_OK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Allow the operation to proceed normally.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DENY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Deny the operation and cause an error to be returned.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_IGNORE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Ignore the operation and continue as if it had never been requested.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h5>Authorization action codes</h5>
<p>The following constants are passed as the first argument to the authorizer
callback function to indicate what type of operation is being authorized.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_INDEX&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create an index&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_TABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_TEMP_INDEX&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a temporary index&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_TEMP_TABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a temporary table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_TEMP_TRIGGER&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a temporary trigger&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_TEMP_VIEW&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a temporary view&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_TRIGGER&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a trigger&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_VIEW&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a view&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DELETE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Delete from a table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_INDEX&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop an index&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_TABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_TEMP_INDEX&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a temporary index&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_TEMP_TABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a temporary table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_TEMP_TRIGGER&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a temporary trigger&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_TEMP_VIEW&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a temporary view&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_TRIGGER&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a trigger&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_VIEW&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a view&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_INSERT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Insert into a table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_PRAGMA&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Execute a PRAGMA statement&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_READ&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Read from a table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_SELECT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Execute a SELECT statement&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_TRANSACTION&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Begin, commit, or rollback a transaction&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_UPDATE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Update a table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_ATTACH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Attach a database&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DETACH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Detach a database&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_ALTER_TABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Alter a table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_REINDEX&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Reindex&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_ANALYZE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Analyze the database&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_CREATE_VTABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create a virtual table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_DROP_VTABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Drop a virtual table&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_FUNCTION&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Use a function&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_SAVEPOINT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Create, release, or rollback a savepoint&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_COPY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Copy data (legacy)&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SQLITE_RECURSIVE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Recursive query&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
