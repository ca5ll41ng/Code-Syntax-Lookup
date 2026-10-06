---
id: "js-en-function-node-os"
language: "js"
lang: "en"
category: "function"
name: "node:os"
title: "OS"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/os.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# OS

<h1>OS</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>The <code>node:os</code> module provides operating system-related utility methods and
properties. It can be accessed using:</p>
<pre><code class="language-mjs">import os from 'node:os';
</code></pre>
<pre><code class="language-cjs">const os = require('node:os');
</code></pre>
<h2><code>os.EOL</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The operating system-specific end-of-line marker.</p>
<ul>
<li><code>\n</code> on POSIX</li>
<li><code>\r\n</code> on Windows</li>
</ul>
<h2><code>os.availableParallelism()</code></h2>
<ul>
<li>Returns: {integer}</li>
</ul>
<p>Returns an estimate of the default amount of parallelism a program should use.
Always returns a value greater than zero.</p>
<p>This function is a small wrapper about libuv's <a href="https://docs.libuv.org/en/v1.x/misc.html#c.uv_available_parallelism"><code>uv_available_parallelism()</code></a>.</p>
<h2><code>os.arch()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the operating system CPU architecture for which the Node.js binary was
compiled. Possible values are <code>'arm'</code>, <code>'arm64'</code>, <code>'ia32'</code>, <code>'loong64'</code>,
<code>'mips'</code>, <code>'mipsel'</code>, <code>'ppc64'</code>, <code>'riscv64'</code>, <code>'s390x'</code>, and <code>'x64'</code>.</p>
<p>The return value is equivalent to <a href="process.md#processarch"><code>process.arch</code></a>.</p>
<h2><code>os.constants</code></h2>
<ul>
<li>Type: {Object}</li>
</ul>
<p>Contains commonly used operating system-specific constants for error codes,
process signals, and so on. The specific constants defined are described in
<a href="#os-constants">OS constants</a>.</p>
<h2><code>os.cpus()</code></h2>
<ul>
<li>Returns: {Object[]}</li>
</ul>
<p>Returns an array of objects containing information about each logical CPU core.
The array will be empty if no CPU information is available, such as if the
<code>/proc</code> file system is unavailable.</p>
<p>The properties included on each object include:</p>
<ul>
<li><code>model</code> {string}</li>
<li><code>speed</code> {number} (in MHz)</li>
<li><code>times</code> {Object}
<ul>
<li><code>user</code> {number} The number of milliseconds the CPU has spent in user mode.</li>
<li><code>nice</code> {number} The number of milliseconds the CPU has spent in nice mode.</li>
<li><code>sys</code> {number} The number of milliseconds the CPU has spent in sys mode.</li>
<li><code>idle</code> {number} The number of milliseconds the CPU has spent in idle mode.</li>
<li><code>irq</code> {number} The number of milliseconds the CPU has spent in irq mode.</li>
</ul>
</li>
</ul>
<pre><code class="language-js">[
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 252020,
      nice: 0,
      sys: 30340,
      idle: 1070356870,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 306960,
      nice: 0,
      sys: 26980,
      idle: 1071569080,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 248450,
      nice: 0,
      sys: 21750,
      idle: 1070919370,
      irq: 0,
    },
  },
  {
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
    speed: 2926,
    times: {
      user: 256880,
      nice: 0,
      sys: 19430,
      idle: 1070905480,
      irq: 20,
    },
  },
];
</code></pre>
<p><code>nice</code> values are POSIX-only. On Windows, the <code>nice</code> values of all processors
are always 0.</p>
<p><code>os.cpus().length</code> should not be used to calculate the amount of parallelism
available to an application. Use
<a href="#osavailableparallelism"><code>os.availableParallelism()</code></a> for this purpose.</p>
<h2><code>os.devNull</code></h2>
<ul>
<li>Type: {string}</li>
</ul>
<p>The platform-specific file path of the null device.</p>
<ul>
<li><code>\\.\nul</code> on Windows</li>
<li><code>/dev/null</code> on POSIX</li>
</ul>
<h2><code>os.endianness()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns a string identifying the endianness of the CPU for which the Node.js
binary was compiled.</p>
<p>Possible values are <code>'BE'</code> for big endian and <code>'LE'</code> for little endian.</p>
<h2><code>os.freemem()</code></h2>
<ul>
<li>Returns: {integer}</li>
</ul>
<p>Returns the amount of free system memory in bytes as an integer.</p>
<h2><code>os.getPriority([pid])</code></h2>
<ul>
<li><code>pid</code> {integer} The process ID to retrieve scheduling priority for.
<strong>Default:</strong> <code>0</code>.</li>
<li>Returns: {integer}</li>
</ul>
<p>Returns the scheduling priority for the process specified by <code>pid</code>. If <code>pid</code> is
not provided or is <code>0</code>, the priority of the current process is returned.</p>
<h2><code>os.homedir()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the string path of the current user's home directory.</p>
<p>On POSIX, it uses the <code>$HOME</code> environment variable if defined. Otherwise it
uses the <a href="https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID">effective UID</a> to look up the user's home directory.</p>
<p>On Windows, it uses the <code>USERPROFILE</code> environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.</p>
<h2><code>os.hostname()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the host name of the operating system as a string.</p>
<h2><code>os.loadavg()</code></h2>
<ul>
<li>Returns: {number[]}</li>
</ul>
<p>Returns an array containing the 1, 5, and 15 minute load averages.</p>
<p>The load average is a measure of system activity calculated by the operating
system and expressed as a fractional number.</p>
<p>The load average is a Unix-specific concept. On Windows, the return value is
always <code>[0, 0, 0]</code>.</p>
<h2><code>os.machine()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the machine type as a string, such as <code>arm</code>, <code>arm64</code>, <code>aarch64</code>,
<code>mips</code>, <code>mips64</code>, <code>ppc64</code>, <code>ppc64le</code>, <code>s390x</code>, <code>i386</code>, <code>i686</code>, <code>x86_64</code>.</p>
<p>On POSIX systems, the machine type is determined by calling
<a href="https://linux.die.net/man/3/uname"><code>uname(3)</code></a>. On Windows, <code>RtlGetVersion()</code> is used, and if it is not
available, <code>GetVersionExW()</code> will be used. See
<a href="https://en.wikipedia.org/wiki/Uname#Examples">https://en.wikipedia.org/wiki/Uname#Examples</a> for more information.</p>
<h2><code>os.networkInterfaces()</code></h2>
<ul>
<li>Returns: {Object}</li>
</ul>
<p>Returns an object containing network interfaces that have been assigned a
network address.</p>
<p>Each key on the returned object identifies a network interface. The associated
value is an array of objects that each describe an assigned network address.</p>
<p>The properties available on the assigned network address object include:</p>
<ul>
<li><code>address</code> {string} The assigned IPv4 or IPv6 address</li>
<li><code>netmask</code> {string} The IPv4 or IPv6 network mask</li>
<li><code>family</code> {string} Either <code>IPv4</code> or <code>IPv6</code></li>
<li><code>mac</code> {string} The MAC address of the network interface</li>
<li><code>internal</code> {boolean} <code>true</code> if the network interface is a loopback or
similar interface that is not remotely accessible; otherwise <code>false</code></li>
<li><code>scopeid</code> {number} The numeric IPv6 scope ID (only specified when <code>family</code>
is <code>IPv6</code>)</li>
<li><code>cidr</code> {string} The assigned IPv4 or IPv6 address with the routing prefix
in CIDR notation. If the <code>netmask</code> is invalid, this property is set
to <code>null</code>.</li>
</ul>
<pre><code class="language-json">{
  &quot;lo&quot;: [
    {
      &quot;address&quot;: &quot;127.0.0.1&quot;,
      &quot;netmask&quot;: &quot;255.0.0.0&quot;,
      &quot;family&quot;: &quot;IPv4&quot;,
      &quot;mac&quot;: &quot;00:00:00:00:00:00&quot;,
      &quot;internal&quot;: true,
      &quot;cidr&quot;: &quot;127.0.0.1/8&quot;
    },
    {
      &quot;address&quot;: &quot;::1&quot;,
      &quot;netmask&quot;: &quot;ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff&quot;,
      &quot;family&quot;: &quot;IPv6&quot;,
      &quot;mac&quot;: &quot;00:00:00:00:00:00&quot;,
      &quot;scopeid&quot;: 0,
      &quot;internal&quot;: true,
      &quot;cidr&quot;: &quot;::1/128&quot;
    }
  ],
  &quot;eth0&quot;: [
    {
      &quot;address&quot;: &quot;192.168.1.108&quot;,
      &quot;netmask&quot;: &quot;255.255.255.0&quot;,
      &quot;family&quot;: &quot;IPv4&quot;,
      &quot;mac&quot;: &quot;01:02:03:0a:0b:0c&quot;,
      &quot;internal&quot;: false,
      &quot;cidr&quot;: &quot;192.168.1.108/24&quot;
    },
    {
      &quot;address&quot;: &quot;fe80::a00:27ff:fe4e:66a1&quot;,
      &quot;netmask&quot;: &quot;ffff:ffff:ffff:ffff::&quot;,
      &quot;family&quot;: &quot;IPv6&quot;,
      &quot;mac&quot;: &quot;01:02:03:0a:0b:0c&quot;,
      &quot;scopeid&quot;: 1,
      &quot;internal&quot;: false,
      &quot;cidr&quot;: &quot;fe80::a00:27ff:fe4e:66a1/64&quot;
    }
  ]
}
</code></pre>
<h2><code>os.platform()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.
Possible values are <code>'aix'</code>, <code>'darwin'</code>, <code>'freebsd'</code>,<code>'linux'</code>,
<code>'openbsd'</code>, <code>'sunos'</code>, and <code>'win32'</code>.</p>
<p>The return value is equivalent to <a href="process.md#processplatform"><code>process.platform</code></a>.</p>
<p>The value <code>'android'</code> may also be returned if Node.js is built on the Android
operating system. <a href="https://github.com/nodejs/node/blob/HEAD/BUILDING.md#android">Android support is experimental</a>.</p>
<h2><code>os.release()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the operating system as a string.</p>
<p>On POSIX systems, the operating system release is determined by calling
<a href="https://linux.die.net/man/3/uname"><code>uname(3)</code></a>. On Windows, <code>GetVersionExW()</code> is used. See
<a href="https://en.wikipedia.org/wiki/Uname#Examples">https://en.wikipedia.org/wiki/Uname#Examples</a> for more information.</p>
<h2><code>os.setPriority([pid, ]priority)</code></h2>
<ul>
<li><code>pid</code> {integer} The process ID to set scheduling priority for.
<strong>Default:</strong> <code>0</code>.</li>
<li><code>priority</code> {integer} The scheduling priority to assign to the process.</li>
</ul>
<p>Attempts to set the scheduling priority for the process specified by <code>pid</code>. If
<code>pid</code> is not provided or is <code>0</code>, the process ID of the current process is used.</p>
<p>The <code>priority</code> input must be an integer between <code>-20</code> (high priority) and <code>19</code>
(low priority). Due to differences between Unix priority levels and Windows
priority classes, <code>priority</code> is mapped to one of six priority constants in
<code>os.constants.priority</code>. When retrieving a process priority level, this range
mapping may cause the return value to be slightly different on Windows. To avoid
confusion, set <code>priority</code> to one of the priority constants.</p>
<p>On Windows, setting priority to <code>PRIORITY_HIGHEST</code> requires elevated user
privileges. Otherwise the set priority will be silently reduced to
<code>PRIORITY_HIGH</code>.</p>
<h2><code>os.tmpdir()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the operating system's default directory for temporary files as a
string.</p>
<p>On Windows, the result can be overridden by <code>TEMP</code> and <code>TMP</code> environment variables, and
<code>TEMP</code> takes precedence over <code>TMP</code>. If neither is set, it defaults to <code>%SystemRoot%\temp</code>
or <code>%windir%\temp</code>.</p>
<p>On non-Windows platforms, <code>TMPDIR</code>, <code>TMP</code> and <code>TEMP</code> environment variables will be checked
to override the result of this method, in the described order. If none of them is set, it
defaults to <code>/tmp</code>.</p>
<p>Some operating system distributions would either configure <code>TMPDIR</code> (non-Windows) or
<code>TEMP</code> and <code>TMP</code> (Windows) by default without additional configurations by the system
administrators. The result of <code>os.tmpdir()</code> typically reflects the system preference
unless it's explicitly overridden by the users.</p>
<h2><code>os.totalmem()</code></h2>
<ul>
<li>Returns: {integer}</li>
</ul>
<p>Returns the total amount of system memory in bytes as an integer.</p>
<h2><code>os.type()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns the operating system name as returned by <a href="https://linux.die.net/man/3/uname"><code>uname(3)</code></a>. For example, it
returns <code>'Linux'</code> on Linux, <code>'Darwin'</code> on macOS, and <code>'Windows_NT'</code> on Windows.</p>
<p>See <a href="https://en.wikipedia.org/wiki/Uname#Examples">https://en.wikipedia.org/wiki/Uname#Examples</a> for additional information
about the output of running <a href="https://linux.die.net/man/3/uname"><code>uname(3)</code></a> on various operating systems.</p>
<h2><code>os.uptime()</code></h2>
<ul>
<li>Returns: {integer}</li>
</ul>
<p>Returns the system uptime in number of seconds.</p>
<h2><code>os.userInfo([options])</code></h2>
<ul>
<li><code>options</code> {Object}
<ul>
<li><code>encoding</code> {string} Character encoding used to interpret resulting strings.
If <code>encoding</code> is set to <code>'buffer'</code>, the <code>username</code>, <code>shell</code>, and <code>homedir</code>
values will be <code>Buffer</code> instances. <strong>Default:</strong> <code>'utf8'</code>.</li>
</ul>
</li>
<li>Returns: {Object}</li>
</ul>
<p>Returns information about the currently effective user. On POSIX platforms,
this is typically a subset of the password file. The returned object includes
the <code>username</code>, <code>uid</code>, <code>gid</code>, <code>shell</code>, and <code>homedir</code>. On Windows, the <code>uid</code> and
<code>gid</code> fields are <code>-1</code>, and <code>shell</code> is <code>null</code>.</p>
<p>The value of <code>homedir</code> returned by <code>os.userInfo()</code> is provided by the operating
system. This differs from the result of <code>os.homedir()</code>, which queries
environment variables for the home directory before falling back to the
operating system response.</p>
<p>Throws a <a href="errors.md#class-systemerror"><code>SystemError</code></a> if a user has no <code>username</code> or <code>homedir</code>.</p>
<h2><code>os.version()</code></h2>
<ul>
<li>Returns: {string}</li>
</ul>
<p>Returns a string identifying the kernel version.</p>
<p>On POSIX systems, the operating system release is determined by calling
<a href="https://linux.die.net/man/3/uname"><code>uname(3)</code></a>. On Windows, <code>RtlGetVersion()</code> is used, and if it is not
available, <code>GetVersionExW()</code> will be used. See
<a href="https://en.wikipedia.org/wiki/Uname#Examples">https://en.wikipedia.org/wiki/Uname#Examples</a> for more information.</p>
<h2>OS constants</h2>
<p>The following constants are exported by <code>os.constants</code>.</p>
<p>Not all constants will be available on every operating system.</p>
<h3>Signal constants</h3>
<p>The following signal constants are exported by <code>os.constants.signals</code>.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGHUP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to indicate when a controlling terminal is closed or a parent
process exits.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGINT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to indicate when a user wishes to interrupt a process
(&lt;kbd&gt;Ctrl&lt;/kbd&gt;+&lt;kbd&gt;C&lt;/kbd&gt;).&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGQUIT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to indicate when a user wishes to terminate a process and perform a
core dump.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGILL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to notify that it has attempted to perform an illegal,
malformed, unknown, or privileged instruction.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGTRAP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when an exception has occurred.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGABRT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to request that it abort.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGIOT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Synonym for &lt;code&gt;SIGABRT&lt;/code&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGBUS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to notify that it has caused a bus error.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGFPE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to notify that it has performed an illegal arithmetic
operation.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGKILL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to terminate it immediately.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGUSR1&lt;/code&gt; &lt;code&gt;SIGUSR2&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to identify user-defined conditions.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGSEGV&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to notify of a segmentation fault.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGPIPE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when it has attempted to write to a disconnected
pipe.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGALRM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when a system timer elapses.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGTERM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to request termination.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGCHLD&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when a child process terminates.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGSTKFLT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to indicate a stack fault on a coprocessor.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGCONT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to instruct the operating system to continue a paused process.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGSTOP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to instruct the operating system to halt a process.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGTSTP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to request it to stop.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGBREAK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to indicate when a user wishes to interrupt a process.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGTTIN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when it reads from the TTY while in the
background.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGTTOU&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when it writes to the TTY while in the
background.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGURG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when a socket has urgent data to read.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGXCPU&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when it has exceeded its limit on CPU usage.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGXFSZ&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when it grows a file larger than the maximum
allowed.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGVTALRM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when a virtual timer has elapsed.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGPROF&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when a system timer has elapsed.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGWINCH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when the controlling terminal has changed its
size.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGIO&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when I/O is available.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGPOLL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Synonym for &lt;code&gt;SIGIO&lt;/code&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGLOST&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process when a file lock has been lost.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGPWR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to notify of a power failure.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGINFO&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Synonym for &lt;code&gt;SIGPWR&lt;/code&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGSYS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Sent to a process to notify of a bad argument.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;SIGUNUSED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Synonym for &lt;code&gt;SIGSYS&lt;/code&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h3>Error constants</h3>
<p>The following error constants are exported by <code>os.constants.errno</code>.</p>
<h4>POSIX error constants</h4>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;E2BIG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the list of arguments is longer than expected.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EACCES&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the operation did not have sufficient permissions.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EADDRINUSE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network address is already in use.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EADDRNOTAVAIL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network address is currently unavailable for
use.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EAFNOSUPPORT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network address family is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EAGAIN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no data available and to try the
operation again later.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EALREADY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the socket already has a pending connection in
progress.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EBADF&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a file descriptor is not valid.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EBADMSG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an invalid data message.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EBUSY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a device or resource is busy.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ECANCELED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an operation was canceled.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ECHILD&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are no child processes.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ECONNABORTED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network connection has been aborted.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ECONNREFUSED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network connection has been refused.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ECONNRESET&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network connection has been reset.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EDEADLK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a resource deadlock has been avoided.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EDESTADDRREQ&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a destination address is required.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EDOM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an argument is out of the domain of the function.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EDQUOT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the disk quota has been exceeded.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EEXIST&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the file already exists.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EFAULT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an invalid pointer address.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EFBIG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the file is too large.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EHOSTUNREACH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the host is unreachable.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EIDRM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the identifier has been removed.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EILSEQ&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an illegal byte sequence.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EINPROGRESS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an operation is already in progress.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EINTR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a function call was interrupted.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EINVAL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an invalid argument was provided.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EIO&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an otherwise unspecified I/O error.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EISCONN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the socket is connected.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EISDIR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the path is a directory.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ELOOP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates too many levels of symbolic links in a path.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EMFILE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are too many open files.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EMLINK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are too many hard links to a file.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EMSGSIZE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the provided message is too long.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EMULTIHOP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a multihop was attempted.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENAMETOOLONG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the filename is too long.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENETDOWN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network is down.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENETRESET&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the connection has been aborted by the network.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENETUNREACH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network is unreachable.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENFILE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates too many open files in the system.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOBUFS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that no buffer space is available.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENODATA&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that no message is available on the stream head read
queue.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENODEV&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no such device.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOENT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no such file or directory.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOEXEC&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an exec format error.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOLCK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are no locks available.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOLINK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indications that a link has been severed.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOMEM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is not enough space.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOMSG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no message of the desired type.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOPROTOOPT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a given protocol is not available.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOSPC&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no space available on the device.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOSR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are no stream resources available.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOSTR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a given resource is not a stream.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOSYS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a function has not been implemented.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOTCONN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the socket is not connected.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOTDIR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the path is not a directory.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOTEMPTY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the directory is not empty.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOTSOCK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the given item is not a socket.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOTSUP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a given operation is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENOTTY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an inappropriate I/O control operation.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ENXIO&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates no such device or address.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EOPNOTSUPP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an operation is not supported on the socket. Although
&lt;code&gt;ENOTSUP&lt;/code&gt; and &lt;code&gt;EOPNOTSUPP&lt;/code&gt; have the same value
on Linux, according to POSIX.1 these error values should be distinct.)&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EOVERFLOW&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a value is too large to be stored in a given data
type.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EPERM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the operation is not permitted.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EPIPE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates a broken pipe.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EPROTO&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates a protocol error.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EPROTONOSUPPORT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a protocol is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EPROTOTYPE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates the wrong type of protocol for a socket.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ERANGE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the results are too large.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EROFS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the file system is read only.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ESPIPE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an invalid seek operation.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ESRCH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no such process.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ESTALE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the file handle is stale.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ETIME&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an expired timer.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ETIMEDOUT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the connection timed out.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;ETXTBSY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a text file is busy.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EWOULDBLOCK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the operation would block.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;EXDEV&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an improper link.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h4>Windows-specific error constants</h4>
<p>The following error codes are specific to the Windows operating system.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEINTR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an interrupted function call.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEBADF&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an invalid file handle.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEACCES&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates insufficient permissions to complete the operation.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEFAULT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an invalid pointer address.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEINVAL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an invalid argument was passed.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEMFILE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are too many open files.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEWOULDBLOCK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a resource is temporarily unavailable.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEINPROGRESS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an operation is currently in progress.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEALREADY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an operation is already in progress.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENOTSOCK&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the resource is not a socket.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEDESTADDRREQ&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a destination address is required.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEMSGSIZE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the message size is too long.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEPROTOTYPE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates the wrong protocol type for the socket.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENOPROTOOPT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates a bad protocol option.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEPROTONOSUPPORT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the protocol is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAESOCKTNOSUPPORT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the socket type is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEOPNOTSUPP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the operation is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEPFNOSUPPORT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the protocol family is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEAFNOSUPPORT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the address family is not supported.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEADDRINUSE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network address is already in use.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEADDRNOTAVAIL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network address is not available.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENETDOWN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network is down.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENETUNREACH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network is unreachable.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENETRESET&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network connection has been reset.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAECONNABORTED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the connection has been aborted.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAECONNRESET&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the connection has been reset by the peer.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENOBUFS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no buffer space available.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEISCONN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the socket is already connected.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENOTCONN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the socket is not connected.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAESHUTDOWN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that data cannot be sent after the socket has been
shutdown.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAETOOMANYREFS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are too many references.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAETIMEDOUT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the connection has timed out.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAECONNREFUSED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the connection has been refused.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAELOOP&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a name cannot be translated.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENAMETOOLONG&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a name was too long.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEHOSTDOWN&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a network host is down.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEHOSTUNREACH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there is no route to a network host.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENOTEMPTY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the directory is not empty.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEPROCLIM&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are too many processes.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEUSERS&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the user quota has been exceeded.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEDQUOT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the disk quota has been exceeded.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAESTALE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates a stale file handle reference.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEREMOTE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the item is remote.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSASYSNOTREADY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the network subsystem is not ready.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAVERNOTSUPPORTED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the &lt;code&gt;winsock.dll&lt;/code&gt; version is out of
range.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSANOTINITIALISED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that successful WSAStartup has not yet been performed.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEDISCON&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a graceful shutdown is in progress.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAENOMORE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are no more results.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAECANCELLED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that an operation has been canceled.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEINVALIDPROCTABLE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the procedure call table is invalid.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEINVALIDPROVIDER&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates an invalid service provider.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEPROVIDERFAILEDINIT&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the service provider failed to initialized.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSASYSCALLFAILURE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates a system call failure.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSASERVICE_NOT_FOUND&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a service was not found.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSATYPE_NOT_FOUND&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a class type was not found.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSA_E_NO_MORE&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that there are no more results.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSA_E_CANCELLED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that the call was canceled.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;WSAEREFUSED&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Indicates that a database query was refused.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h3>dlopen constants</h3>
<p>If available on the operating system, the following constants
are exported in <code>os.constants.dlopen</code>. See dlopen(3) for detailed
information.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RTLD_LAZY&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Perform lazy binding. Node.js sets this flag by default.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RTLD_NOW&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Resolve all undefined symbols in the library before dlopen(3)
returns.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RTLD_GLOBAL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Symbols defined by the library will be made available for symbol
resolution of subsequently loaded libraries.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RTLD_LOCAL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The converse of &lt;code&gt;RTLD_GLOBAL&lt;/code&gt;. This is the default behavior
if neither flag is specified.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;RTLD_DEEPBIND&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;Make a self-contained library use its own symbols in preference to
symbols from previously loaded libraries.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h3>Priority constants</h3>
<p>The following process scheduling constants are exported by
<code>os.constants.priority</code>.</p>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;PRIORITY_LOW&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The lowest process scheduling priority. This corresponds to
&lt;code&gt;IDLE_PRIORITY_CLASS&lt;/code&gt; on Windows, and a nice value of
&lt;code&gt;19&lt;/code&gt; on all other platforms.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;PRIORITY_BELOW_NORMAL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The process scheduling priority above &lt;code&gt;PRIORITY_LOW&lt;/code&gt; and
below &lt;code&gt;PRIORITY_NORMAL&lt;/code&gt;. This corresponds to
&lt;code&gt;BELOW_NORMAL_PRIORITY_CLASS&lt;/code&gt; on Windows, and a nice value of
&lt;code&gt;10&lt;/code&gt; on all other platforms.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;PRIORITY_NORMAL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The default process scheduling priority. This corresponds to
&lt;code&gt;NORMAL_PRIORITY_CLASS&lt;/code&gt; on Windows, and a nice value of
&lt;code&gt;0&lt;/code&gt; on all other platforms.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;PRIORITY_ABOVE_NORMAL&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The process scheduling priority above &lt;code&gt;PRIORITY_NORMAL&lt;/code&gt; and
below &lt;code&gt;PRIORITY_HIGH&lt;/code&gt;. This corresponds to
&lt;code&gt;ABOVE_NORMAL_PRIORITY_CLASS&lt;/code&gt; on Windows, and a nice value of
&lt;code&gt;-7&lt;/code&gt; on all other platforms.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;PRIORITY_HIGH&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The process scheduling priority above &lt;code&gt;PRIORITY_ABOVE_NORMAL&lt;/code&gt;
and below &lt;code&gt;PRIORITY_HIGHEST&lt;/code&gt;. This corresponds to
&lt;code&gt;HIGH_PRIORITY_CLASS&lt;/code&gt; on Windows, and a nice value of
&lt;code&gt;-14&lt;/code&gt; on all other platforms.&lt;/td&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;PRIORITY_HIGHEST&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;The highest process scheduling priority. This corresponds to
&lt;code&gt;REALTIME_PRIORITY_CLASS&lt;/code&gt; on Windows, and a nice value of
&lt;code&gt;-20&lt;/code&gt; on all other platforms.&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
<h3>libuv constants</h3>
<p>&lt;table&gt;
&lt;tr&gt;
&lt;th&gt;Constant&lt;/th&gt;
&lt;th&gt;Description&lt;/th&gt;
&lt;/tr&gt;
&lt;tr&gt;
&lt;td&gt;&lt;code&gt;UV_UDP_REUSEADDR&lt;/code&gt;&lt;/td&gt;
&lt;td&gt;&lt;/td&gt;
&lt;/tr&gt;
&lt;/table&gt;</p>
