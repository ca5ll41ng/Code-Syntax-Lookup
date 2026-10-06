---
id: "js-en-function-node-report"
language: "js"
lang: "en"
category: "function"
name: "node:report"
title: "Diagnostic report"
directive: "module"
module: "node"
source_url: "https://nodejs.org/docs/latest/api/report.html"
license: "CC-BY-4.0"
updated: "2026-10-06"
---

# Diagnostic report

<h1>Diagnostic report</h1>
<blockquote>
<p>Stability: 2 - Stable</p>
</blockquote>
<p>Delivers a JSON-formatted diagnostic summary, written to a file.</p>
<p>The report is intended for development, test, and production use, to capture
and preserve information for problem determination. It includes JavaScript
and native stack traces, heap statistics, platform information, resource
usage etc. With the report option enabled, diagnostic reports can be triggered
on unhandled exceptions, fatal errors and user signals, in addition to
triggering programmatically through API calls.</p>
<p>A complete example report that was generated on an uncaught exception
is provided below for reference.</p>
<pre><code class="language-json">{
  &quot;header&quot;: {
    &quot;reportVersion&quot;: 5,
    &quot;event&quot;: &quot;exception&quot;,
    &quot;trigger&quot;: &quot;Exception&quot;,
    &quot;filename&quot;: &quot;report.20181221.005011.8974.0.001.json&quot;,
    &quot;dumpEventTime&quot;: &quot;2018-12-21T00:50:11Z&quot;,
    &quot;dumpEventTimeStamp&quot;: &quot;1545371411331&quot;,
    &quot;processId&quot;: 8974,
    &quot;cwd&quot;: &quot;/home/nodeuser/project/node&quot;,
    &quot;commandLine&quot;: [
      &quot;/home/nodeuser/project/node/out/Release/node&quot;,
      &quot;--report-uncaught-exception&quot;,
      &quot;/home/nodeuser/project/node/test/report/test-exception.js&quot;,
      &quot;child&quot;
    ],
    &quot;nodejsVersion&quot;: &quot;v12.0.0-pre&quot;,
    &quot;glibcVersionRuntime&quot;: &quot;2.17&quot;,
    &quot;glibcVersionCompiler&quot;: &quot;2.17&quot;,
    &quot;wordSize&quot;: &quot;64 bit&quot;,
    &quot;arch&quot;: &quot;x64&quot;,
    &quot;platform&quot;: &quot;linux&quot;,
    &quot;componentVersions&quot;: {
      &quot;node&quot;: &quot;12.0.0-pre&quot;,
      &quot;v8&quot;: &quot;7.1.302.28-node.5&quot;,
      &quot;uv&quot;: &quot;1.24.1&quot;,
      &quot;zlib&quot;: &quot;1.2.11&quot;,
      &quot;ares&quot;: &quot;1.15.0&quot;,
      &quot;modules&quot;: &quot;68&quot;,
      &quot;nghttp2&quot;: &quot;1.34.0&quot;,
      &quot;napi&quot;: &quot;3&quot;,
      &quot;llhttp&quot;: &quot;1.0.1&quot;,
      &quot;openssl&quot;: &quot;1.1.0j&quot;
    },
    &quot;release&quot;: {
      &quot;name&quot;: &quot;node&quot;
    },
    &quot;osName&quot;: &quot;Linux&quot;,
    &quot;osRelease&quot;: &quot;3.10.0-862.el7.x86_64&quot;,
    &quot;osVersion&quot;: &quot;#1 SMP Wed Mar 21 18:14:51 EDT 2018&quot;,
    &quot;osMachine&quot;: &quot;x86_64&quot;,
    &quot;cpus&quot;: [
      {
        &quot;model&quot;: &quot;Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz&quot;,
        &quot;speed&quot;: 2700,
        &quot;user&quot;: 88902660,
        &quot;nice&quot;: 0,
        &quot;sys&quot;: 50902570,
        &quot;idle&quot;: 241732220,
        &quot;irq&quot;: 0
      },
      {
        &quot;model&quot;: &quot;Intel(R) Core(TM) i7-6820HQ CPU @ 2.70GHz&quot;,
        &quot;speed&quot;: 2700,
        &quot;user&quot;: 88902660,
        &quot;nice&quot;: 0,
        &quot;sys&quot;: 50902570,
        &quot;idle&quot;: 241732220,
        &quot;irq&quot;: 0
      }
    ],
    &quot;networkInterfaces&quot;: [
      {
        &quot;name&quot;: &quot;en0&quot;,
        &quot;internal&quot;: false,
        &quot;mac&quot;: &quot;13:10:de:ad:be:ef&quot;,
        &quot;address&quot;: &quot;10.0.0.37&quot;,
        &quot;netmask&quot;: &quot;255.255.255.0&quot;,
        &quot;family&quot;: &quot;IPv4&quot;
      }
    ],
    &quot;host&quot;: &quot;test_machine&quot;
  },
  &quot;javascriptStack&quot;: {
    &quot;message&quot;: &quot;Error: *** test-exception.js: throwing uncaught Error&quot;,
    &quot;stack&quot;: [
      &quot;at myException (/home/nodeuser/project/node/test/report/test-exception.js:9:11)&quot;,
      &quot;at Object.&lt;anonymous&gt; (/home/nodeuser/project/node/test/report/test-exception.js:12:3)&quot;,
      &quot;at Module._compile (internal/modules/cjs/loader.js:718:30)&quot;,
      &quot;at Object.Module._extensions..js (internal/modules/cjs/loader.js:729:10)&quot;,
      &quot;at Module.load (internal/modules/cjs/loader.js:617:32)&quot;,
      &quot;at tryModuleLoad (internal/modules/cjs/loader.js:560:12)&quot;,
      &quot;at Function.Module._load (internal/modules/cjs/loader.js:552:3)&quot;,
      &quot;at Function.Module.runMain (internal/modules/cjs/loader.js:771:12)&quot;,
      &quot;at executeUserCode (internal/bootstrap/node.js:332:15)&quot;
    ]
  },
  &quot;nativeStack&quot;: [
    {
      &quot;pc&quot;: &quot;0x000055b57f07a9ef&quot;,
      &quot;symbol&quot;: &quot;report::GetNodeReport(v8::Isolate*, node::Environment*, char const*, char const*, v8::Local&lt;v8::String&gt;, std::ostream&amp;) [./node]&quot;
    },
    {
      &quot;pc&quot;: &quot;0x000055b57f07cf03&quot;,
      &quot;symbol&quot;: &quot;report::GetReport(v8::FunctionCallbackInfo&lt;v8::Value&gt; const&amp;) [./node]&quot;
    },
    {
      &quot;pc&quot;: &quot;0x000055b57f1bccfd&quot;,
      &quot;symbol&quot;: &quot; [./node]&quot;
    },
    {
      &quot;pc&quot;: &quot;0x000055b57f1be048&quot;,
      &quot;symbol&quot;: &quot;v8::internal::Builtin_HandleApiCall(int, v8::internal::Object**, v8::internal::Isolate*) [./node]&quot;
    },
    {
      &quot;pc&quot;: &quot;0x000055b57feeda0e&quot;,
      &quot;symbol&quot;: &quot; [./node]&quot;
    }
  ],
  &quot;javascriptHeap&quot;: {
    &quot;totalMemory&quot;: 5660672,
    &quot;executableMemory&quot;: 524288,
    &quot;totalCommittedMemory&quot;: 5488640,
    &quot;availableMemory&quot;: 4341379928,
    &quot;totalGlobalHandlesMemory&quot;: 8192,
    &quot;usedGlobalHandlesMemory&quot;: 3136,
    &quot;usedMemory&quot;: 4816432,
    &quot;memoryLimit&quot;: 4345298944,
    &quot;mallocedMemory&quot;: 254128,
    &quot;externalMemory&quot;: 315644,
    &quot;peakMallocedMemory&quot;: 98752,
    &quot;nativeContextCount&quot;: 1,
    &quot;detachedContextCount&quot;: 0,
    &quot;doesZapGarbage&quot;: 0,
    &quot;heapSpaces&quot;: {
      &quot;read_only_space&quot;: {
        &quot;memorySize&quot;: 524288,
        &quot;committedMemory&quot;: 39208,
        &quot;capacity&quot;: 515584,
        &quot;used&quot;: 30504,
        &quot;available&quot;: 485080
      },
      &quot;new_space&quot;: {
        &quot;memorySize&quot;: 2097152,
        &quot;committedMemory&quot;: 2019312,
        &quot;capacity&quot;: 1031168,
        &quot;used&quot;: 985496,
        &quot;available&quot;: 45672
      },
      &quot;old_space&quot;: {
        &quot;memorySize&quot;: 2273280,
        &quot;committedMemory&quot;: 1769008,
        &quot;capacity&quot;: 1974640,
        &quot;used&quot;: 1725488,
        &quot;available&quot;: 249152
      },
      &quot;code_space&quot;: {
        &quot;memorySize&quot;: 696320,
        &quot;committedMemory&quot;: 184896,
        &quot;capacity&quot;: 152128,
        &quot;used&quot;: 152128,
        &quot;available&quot;: 0
      },
      &quot;map_space&quot;: {
        &quot;memorySize&quot;: 536576,
        &quot;committedMemory&quot;: 344928,
        &quot;capacity&quot;: 327520,
        &quot;used&quot;: 327520,
        &quot;available&quot;: 0
      },
      &quot;large_object_space&quot;: {
        &quot;memorySize&quot;: 0,
        &quot;committedMemory&quot;: 0,
        &quot;capacity&quot;: 1520590336,
        &quot;used&quot;: 0,
        &quot;available&quot;: 1520590336
      },
      &quot;new_large_object_space&quot;: {
        &quot;memorySize&quot;: 0,
        &quot;committedMemory&quot;: 0,
        &quot;capacity&quot;: 0,
        &quot;used&quot;: 0,
        &quot;available&quot;: 0
      }
    }
  },
  &quot;resourceUsage&quot;: {
    &quot;rss&quot;: &quot;35766272&quot;,
    &quot;free_memory&quot;: &quot;1598337024&quot;,
    &quot;total_memory&quot;: &quot;17179869184&quot;,
    &quot;available_memory&quot;: &quot;1598337024&quot;,
    &quot;maxRss&quot;: &quot;36624662528&quot;,
    &quot;constrained_memory&quot;: &quot;36624662528&quot;,
    &quot;userCpuSeconds&quot;: 0.040072,
    &quot;kernelCpuSeconds&quot;: 0.016029,
    &quot;cpuConsumptionPercent&quot;: 5.6101,
    &quot;userCpuConsumptionPercent&quot;: 4.0072,
    &quot;kernelCpuConsumptionPercent&quot;: 1.6029,
    &quot;pageFaults&quot;: {
      &quot;IORequired&quot;: 0,
      &quot;IONotRequired&quot;: 4610
    },
    &quot;fsActivity&quot;: {
      &quot;reads&quot;: 0,
      &quot;writes&quot;: 0
    }
  },
  &quot;uvthreadResourceUsage&quot;: {
    &quot;userCpuSeconds&quot;: 0.039843,
    &quot;kernelCpuSeconds&quot;: 0.015937,
    &quot;cpuConsumptionPercent&quot;: 5.578,
    &quot;userCpuConsumptionPercent&quot;: 3.9843,
    &quot;kernelCpuConsumptionPercent&quot;: 1.5937,
    &quot;fsActivity&quot;: {
      &quot;reads&quot;: 0,
      &quot;writes&quot;: 0
    }
  },
  &quot;libuv&quot;: [
    {
      &quot;type&quot;: &quot;async&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: false,
      &quot;address&quot;: &quot;0x0000000102910900&quot;,
      &quot;details&quot;: &quot;&quot;
    },
    {
      &quot;type&quot;: &quot;timer&quot;,
      &quot;is_active&quot;: false,
      &quot;is_referenced&quot;: false,
      &quot;address&quot;: &quot;0x00007fff5fbfeab0&quot;,
      &quot;repeat&quot;: 0,
      &quot;firesInMsFromNow&quot;: 94403548320796,
      &quot;expired&quot;: true
    },
    {
      &quot;type&quot;: &quot;check&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: false,
      &quot;address&quot;: &quot;0x00007fff5fbfeb48&quot;
    },
    {
      &quot;type&quot;: &quot;idle&quot;,
      &quot;is_active&quot;: false,
      &quot;is_referenced&quot;: true,
      &quot;address&quot;: &quot;0x00007fff5fbfebc0&quot;
    },
    {
      &quot;type&quot;: &quot;prepare&quot;,
      &quot;is_active&quot;: false,
      &quot;is_referenced&quot;: false,
      &quot;address&quot;: &quot;0x00007fff5fbfec38&quot;
    },
    {
      &quot;type&quot;: &quot;check&quot;,
      &quot;is_active&quot;: false,
      &quot;is_referenced&quot;: false,
      &quot;address&quot;: &quot;0x00007fff5fbfecb0&quot;
    },
    {
      &quot;type&quot;: &quot;async&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: false,
      &quot;address&quot;: &quot;0x000000010188f2e0&quot;
    },
    {
      &quot;type&quot;: &quot;tty&quot;,
      &quot;is_active&quot;: false,
      &quot;is_referenced&quot;: true,
      &quot;address&quot;: &quot;0x000055b581db0e18&quot;,
      &quot;width&quot;: 204,
      &quot;height&quot;: 55,
      &quot;fd&quot;: 17,
      &quot;writeQueueSize&quot;: 0,
      &quot;readable&quot;: true,
      &quot;writable&quot;: true
    },
    {
      &quot;type&quot;: &quot;signal&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: false,
      &quot;address&quot;: &quot;0x000055b581d80010&quot;,
      &quot;signum&quot;: 28,
      &quot;signal&quot;: &quot;SIGWINCH&quot;
    },
    {
      &quot;type&quot;: &quot;tty&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: true,
      &quot;address&quot;: &quot;0x000055b581df59f8&quot;,
      &quot;width&quot;: 204,
      &quot;height&quot;: 55,
      &quot;fd&quot;: 19,
      &quot;writeQueueSize&quot;: 0,
      &quot;readable&quot;: true,
      &quot;writable&quot;: true
    },
    {
      &quot;type&quot;: &quot;loop&quot;,
      &quot;is_active&quot;: true,
      &quot;address&quot;: &quot;0x000055fc7b2cb180&quot;,
      &quot;loopIdleTimeSeconds&quot;: 22644.8
    },
    {
      &quot;type&quot;: &quot;tcp&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: true,
      &quot;address&quot;: &quot;0x000055e70fcb85d8&quot;,
      &quot;localEndpoint&quot;: {
        &quot;host&quot;: &quot;localhost&quot;,
        &quot;ip4&quot;: &quot;127.0.0.1&quot;,
        &quot;port&quot;: 48986
      },
      &quot;remoteEndpoint&quot;: {
        &quot;host&quot;: &quot;localhost&quot;,
        &quot;ip4&quot;: &quot;127.0.0.1&quot;,
        &quot;port&quot;: 38573
      },
      &quot;sendBufferSize&quot;: 2626560,
      &quot;recvBufferSize&quot;: 131072,
      &quot;fd&quot;: 24,
      &quot;writeQueueSize&quot;: 0,
      &quot;readable&quot;: true,
      &quot;writable&quot;: true
    }
  ],
  &quot;workers&quot;: [],
  &quot;environmentVariables&quot;: {
    &quot;REMOTEHOST&quot;: &quot;REMOVED&quot;,
    &quot;MANPATH&quot;: &quot;/opt/rh/devtoolset-3/root/usr/share/man:&quot;,
    &quot;XDG_SESSION_ID&quot;: &quot;66126&quot;,
    &quot;HOSTNAME&quot;: &quot;test_machine&quot;,
    &quot;HOST&quot;: &quot;test_machine&quot;,
    &quot;TERM&quot;: &quot;xterm-256color&quot;,
    &quot;SHELL&quot;: &quot;/bin/csh&quot;,
    &quot;SSH_CLIENT&quot;: &quot;REMOVED&quot;,
    &quot;PERL5LIB&quot;: &quot;/opt/rh/devtoolset-3/root//usr/lib64/perl5/vendor_perl:/opt/rh/devtoolset-3/root/usr/lib/perl5:/opt/rh/devtoolset-3/root//usr/share/perl5/vendor_perl&quot;,
    &quot;OLDPWD&quot;: &quot;/home/nodeuser/project/node/src&quot;,
    &quot;JAVACONFDIRS&quot;: &quot;/opt/rh/devtoolset-3/root/etc/java:/etc/java&quot;,
    &quot;SSH_TTY&quot;: &quot;/dev/pts/0&quot;,
    &quot;PCP_DIR&quot;: &quot;/opt/rh/devtoolset-3/root&quot;,
    &quot;GROUP&quot;: &quot;normaluser&quot;,
    &quot;USER&quot;: &quot;nodeuser&quot;,
    &quot;LD_LIBRARY_PATH&quot;: &quot;/opt/rh/devtoolset-3/root/usr/lib64:/opt/rh/devtoolset-3/root/usr/lib&quot;,
    &quot;HOSTTYPE&quot;: &quot;x86_64-linux&quot;,
    &quot;XDG_CONFIG_DIRS&quot;: &quot;/opt/rh/devtoolset-3/root/etc/xdg:/etc/xdg&quot;,
    &quot;MAIL&quot;: &quot;/var/spool/mail/nodeuser&quot;,
    &quot;PATH&quot;: &quot;/home/nodeuser/project/node:/opt/rh/devtoolset-3/root/usr/bin:/usr/local/bin:/usr/bin:/usr/local/sbin:/usr/sbin&quot;,
    &quot;PWD&quot;: &quot;/home/nodeuser/project/node&quot;,
    &quot;LANG&quot;: &quot;en_US.UTF-8&quot;,
    &quot;PS1&quot;: &quot;\\u@\\h : \\[\\e[31m\\]\\w\\[\\e[m\\] &gt;  &quot;,
    &quot;SHLVL&quot;: &quot;2&quot;,
    &quot;HOME&quot;: &quot;/home/nodeuser&quot;,
    &quot;OSTYPE&quot;: &quot;linux&quot;,
    &quot;VENDOR&quot;: &quot;unknown&quot;,
    &quot;PYTHONPATH&quot;: &quot;/opt/rh/devtoolset-3/root/usr/lib64/python2.7/site-packages:/opt/rh/devtoolset-3/root/usr/lib/python2.7/site-packages&quot;,
    &quot;MACHTYPE&quot;: &quot;x86_64&quot;,
    &quot;LOGNAME&quot;: &quot;nodeuser&quot;,
    &quot;XDG_DATA_DIRS&quot;: &quot;/opt/rh/devtoolset-3/root/usr/share:/usr/local/share:/usr/share&quot;,
    &quot;LESSOPEN&quot;: &quot;||/usr/bin/lesspipe.sh %s&quot;,
    &quot;INFOPATH&quot;: &quot;/opt/rh/devtoolset-3/root/usr/share/info&quot;,
    &quot;XDG_RUNTIME_DIR&quot;: &quot;/run/user/50141&quot;,
    &quot;_&quot;: &quot;./node&quot;
  },
  &quot;userLimits&quot;: {
    &quot;core_file_size_blocks&quot;: {
      &quot;soft&quot;: &quot;&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    &quot;data_seg_size_bytes&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    &quot;file_size_blocks&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    &quot;max_locked_memory_bytes&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: 65536
    },
    &quot;max_memory_size_bytes&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    &quot;open_files&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: 4096
    },
    &quot;stack_size_bytes&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    &quot;cpu_time_seconds&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    &quot;max_user_processes&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: 4127290
    },
    &quot;virtual_memory_bytes&quot;: {
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    }
  },
  &quot;sharedObjects&quot;: [
    &quot;/lib64/libdl.so.2&quot;,
    &quot;/lib64/librt.so.1&quot;,
    &quot;/lib64/libstdc++.so.6&quot;,
    &quot;/lib64/libm.so.6&quot;,
    &quot;/lib64/libgcc_s.so.1&quot;,
    &quot;/lib64/libpthread.so.0&quot;,
    &quot;/lib64/libc.so.6&quot;,
    &quot;/lib64/ld-linux-x86-64.so.2&quot;
  ]
}
</code></pre>
<h2>Usage</h2>
<pre><code class="language-bash">node --report-uncaught-exception --report-on-signal \
--report-on-fatalerror app.js
</code></pre>
<ul>
<li>
<p><code>--report-uncaught-exception</code> Enables report to be generated on
un-caught exceptions. Useful when inspecting JavaScript stack in conjunction
with native stack and other runtime environment data.</p>
</li>
<li>
<p><code>--report-on-signal</code> Enables report to be generated upon receiving
the specified (or predefined) signal to the running Node.js process. (See
below on how to modify the signal that triggers the report.) Default signal is
<code>SIGUSR2</code>. Useful when a report needs to be triggered from another program.
Application monitors may leverage this feature to collect report at regular
intervals and plot rich set of internal runtime data to their views.</p>
</li>
</ul>
<p>Signal based report generation is not supported in Windows.</p>
<p>Under normal circumstances, there is no need to modify the report triggering
signal. However, if <code>SIGUSR2</code> is already used for other purposes, then this
flag helps to change the signal for report generation and preserve the original
meaning of <code>SIGUSR2</code> for the said purposes.</p>
<ul>
<li>
<p><code>--report-on-fatalerror</code> Enables the report to be triggered on fatal errors
(internal errors within the Node.js runtime, such as out of memory)
that leads to termination of the application. Useful to inspect various
diagnostic data elements such as heap, stack, event loop state, resource
consumption etc. to reason about the fatal error.</p>
</li>
<li>
<p><code>--report-on-process-timeout</code> Enables the report to be triggered when the
duration set with <code>--process-timeout</code> elapses before the process exits.
Useful to reason about why the process did not exit.</p>
</li>
<li>
<p><code>--report-compact</code> Write reports in a compact format, single-line JSON, more
easily consumable by log processing systems than the default multi-line format
designed for human consumption.</p>
</li>
<li>
<p><code>--report-directory</code> Location at which the report will be
generated.</p>
</li>
<li>
<p><code>--report-filename</code> Name of the file to which the report will be
written.</p>
</li>
<li>
<p><code>--report-signal</code> Sets or resets the signal for report generation
(not supported on Windows). Default signal is <code>SIGUSR2</code>.</p>
</li>
<li>
<p><code>--report-exclude-network</code> Exclude <code>header.networkInterfaces</code> and disable the reverse DNS queries
in <code>libuv.*.(remote|local)Endpoint.host</code> from the diagnostic report.
By default this is not set and the network interfaces are included.</p>
</li>
<li>
<p><code>--report-exclude-env</code> Exclude <code>environmentVariables</code> from the
diagnostic report. By default this is not set and the environment
variables are included.</p>
</li>
</ul>
<p>A report can also be triggered via an API call from a JavaScript application:</p>
<pre><code class="language-js">process.report.writeReport();
</code></pre>
<p>This function takes an optional additional argument <code>filename</code>, which is
the name of a file into which the report is written.</p>
<pre><code class="language-js">process.report.writeReport('./foo.json');
</code></pre>
<p>This function takes an optional additional argument <code>err</code> which is an <code>Error</code>
object that will be used as the context for the JavaScript stack printed in the
report. When using report to handle errors in a callback or an exception
handler, this allows the report to include the location of the original error as
well as where it was handled.</p>
<pre><code class="language-js">try {
  process.chdir('/non-existent-path');
} catch (err) {
  process.report.writeReport(err);
}
// Any other code
</code></pre>
<p>If both filename and error object are passed to <code>writeReport()</code> the
error object must be the second parameter.</p>
<pre><code class="language-js">try {
  process.chdir('/non-existent-path');
} catch (err) {
  process.report.writeReport(filename, err);
}
// Any other code
</code></pre>
<p>The content of the diagnostic report can be returned as a JavaScript Object
via an API call from a JavaScript application:</p>
<pre><code class="language-js">const report = process.report.getReport();
console.log(typeof report === 'object'); // true

// Similar to process.report.writeReport() output
console.log(JSON.stringify(report, null, 2));
</code></pre>
<p>This function takes an optional additional argument <code>err</code>, which is an <code>Error</code>
object that will be used as the context for the JavaScript stack printed in the
report.</p>
<pre><code class="language-js">const report = process.report.getReport(new Error('custom error'));
console.log(typeof report === 'object'); // true
</code></pre>
<p>The API versions are useful when inspecting the runtime state from within
the application, in expectation of self-adjusting the resource consumption,
load balancing, monitoring etc.</p>
<p>The content of the report consists of a header section containing the event
type, date, time, PID, and Node.js version, sections containing JavaScript and
native stack traces, a section containing V8 heap information, a section
containing <code>libuv</code> handle information, and an OS platform information section
showing CPU and memory usage and system limits. An example report can be
triggered using the Node.js REPL:</p>
<pre><code class="language-console">$ node
&gt; process.report.writeReport();
Writing Node.js report to file: report.20181126.091102.8480.0.001.json
Node.js report completed
&gt;
</code></pre>
<p>When a report is written, start and end messages are issued to stderr
and the filename of the report is returned to the caller. The default filename
includes the date, time, PID, and a sequence number. The sequence number helps
in associating the report dump with the runtime state if generated multiple
times for the same Node.js process.</p>
<h2>Report Version</h2>
<p>Diagnostic report has an associated single-digit version number (<code>report.header.reportVersion</code>),
uniquely representing the report format. The version number is bumped
when new key is added or removed, or the data type of a value is changed.
Report version definitions are consistent across LTS releases.</p>
<h3>Version history</h3>
<h4>Version 5</h4>
<p>Replace the keys <code>data_seg_size_kbytes</code>, <code>max_memory_size_kbytes</code>, and <code>virtual_memory_kbytes</code>
with <code>data_seg_size_bytes</code>, <code>max_memory_size_bytes</code>, and <code>virtual_memory_bytes</code>
respectively in the <code>userLimits</code> section, as these values are given in bytes.</p>
<pre><code class="language-json">{
  &quot;userLimits&quot;: {
    // Skip some keys ...
    &quot;data_seg_size_bytes&quot;: { // replacing data_seg_size_kbytes
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    // ...
    &quot;max_memory_size_bytes&quot;: { // replacing max_memory_size_kbytes
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    },
    // ...
    &quot;virtual_memory_bytes&quot;: { // replacing virtual_memory_kbytes
      &quot;soft&quot;: &quot;unlimited&quot;,
      &quot;hard&quot;: &quot;unlimited&quot;
    }
  }
}
</code></pre>
<h4>Version 4</h4>
<p>New fields <code>ipv4</code> and <code>ipv6</code> are added to <code>tcp</code> and <code>udp</code> libuv handles endpoints. Examples:</p>
<pre><code class="language-json">{
  &quot;libuv&quot;: [
    {
      &quot;type&quot;: &quot;tcp&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: true,
      &quot;address&quot;: &quot;0x000055e70fcb85d8&quot;,
      &quot;localEndpoint&quot;: {
        &quot;host&quot;: &quot;localhost&quot;,
        &quot;ip4&quot;: &quot;127.0.0.1&quot;, // new key
        &quot;port&quot;: 48986
      },
      &quot;remoteEndpoint&quot;: {
        &quot;host&quot;: &quot;localhost&quot;,
        &quot;ip4&quot;: &quot;127.0.0.1&quot;, // new key
        &quot;port&quot;: 38573
      },
      &quot;sendBufferSize&quot;: 2626560,
      &quot;recvBufferSize&quot;: 131072,
      &quot;fd&quot;: 24,
      &quot;writeQueueSize&quot;: 0,
      &quot;readable&quot;: true,
      &quot;writable&quot;: true
    },
    {
      &quot;type&quot;: &quot;tcp&quot;,
      &quot;is_active&quot;: true,
      &quot;is_referenced&quot;: true,
      &quot;address&quot;: &quot;0x000055e70fcd68c8&quot;,
      &quot;localEndpoint&quot;: {
        &quot;host&quot;: &quot;ip6-localhost&quot;,
        &quot;ip6&quot;: &quot;::1&quot;, // new key
        &quot;port&quot;: 52266
      },
      &quot;remoteEndpoint&quot;: {
        &quot;host&quot;: &quot;ip6-localhost&quot;,
        &quot;ip6&quot;: &quot;::1&quot;, // new key
        &quot;port&quot;: 38573
      },
      &quot;sendBufferSize&quot;: 2626560,
      &quot;recvBufferSize&quot;: 131072,
      &quot;fd&quot;: 25,
      &quot;writeQueueSize&quot;: 0,
      &quot;readable&quot;: false,
      &quot;writable&quot;: false
    }
  ]
}
</code></pre>
<h4>Version 3</h4>
<p>The following memory usage keys are added to the <code>resourceUsage</code> section.</p>
<pre><code class="language-json">{
  &quot;resourceUsage&quot;: {
    &quot;rss&quot;: &quot;35766272&quot;,
    &quot;free_memory&quot;: &quot;1598337024&quot;,
    &quot;total_memory&quot;: &quot;17179869184&quot;,
    &quot;available_memory&quot;: &quot;1598337024&quot;,
    &quot;constrained_memory&quot;: &quot;36624662528&quot;
  }
}
</code></pre>
<h4>Version 2</h4>
<p>Added <a href="worker_threads.md"><code>Worker</code></a> support. Refer to <a href="#interaction-with-workers">Interaction with workers</a> section for more details.</p>
<h4>Version 1</h4>
<p>This is the first version of the diagnostic report.</p>
<h2>Configuration</h2>
<p>Additional runtime configuration of report generation is available via
the following properties of <code>process.report</code>:</p>
<p><code>reportOnFatalError</code> triggers diagnostic reporting on fatal errors when <code>true</code>.
Defaults to <code>false</code>.</p>
<p><code>reportOnSignal</code> triggers diagnostic reporting on signal when <code>true</code>. This is
not supported on Windows. Defaults to <code>false</code>.</p>
<p><code>reportOnUncaughtException</code> triggers diagnostic reporting on uncaught exception
when <code>true</code>. Defaults to <code>false</code>.</p>
<p><code>signal</code> specifies the POSIX signal identifier that will be used
to intercept external triggers for report generation. Defaults to
<code>'SIGUSR2'</code>.</p>
<p><code>filename</code> specifies the name of the output file in the file system.
Special meaning is attached to <code>stdout</code> and <code>stderr</code>. Usage of these
will result in report being written to the associated standard streams.
In cases where standard streams are used, the value in <code>directory</code> is ignored.
URLs are not supported. Defaults to a composite filename that contains
timestamp, PID, and sequence number.</p>
<p><code>directory</code> specifies the file system directory where the report will be
written. URLs are not supported. Defaults to the current working directory of
the Node.js process.</p>
<p><code>excludeNetwork</code> excludes <code>header.networkInterfaces</code> from the diagnostic report.</p>
<pre><code class="language-js">// Trigger report only on uncaught exceptions.
process.report.reportOnFatalError = false;
process.report.reportOnSignal = false;
process.report.reportOnUncaughtException = true;

// Trigger report for both internal errors as well as external signal.
process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = false;

// Change the default signal to 'SIGQUIT' and enable it.
process.report.reportOnFatalError = false;
process.report.reportOnUncaughtException = false;
process.report.reportOnSignal = true;
process.report.signal = 'SIGQUIT';

// Disable network interfaces reporting
process.report.excludeNetwork = true;
</code></pre>
<p>Configuration on module initialization is also available via
environment variables:</p>
<pre><code class="language-bash">NODE_OPTIONS=&quot;--report-uncaught-exception \
  --report-on-fatalerror --report-on-signal \
  --report-signal=SIGUSR2  --report-filename=./report.json \
  --report-directory=/home/nodeuser&quot;
</code></pre>
<p>Specific API documentation can be found under
<a href="process.md"><code>process API documentation</code></a> section.</p>
<h2>Interaction with workers</h2>
<p><a href="worker_threads.md"><code>Worker</code></a> threads can create reports in the same way that the main thread
does.</p>
<p>Reports will include information on any Workers that are children of the current
thread as part of the <code>workers</code> section, with each Worker generating a report
in the standard report format.</p>
<p>The thread which is generating the report will wait for the reports from Worker
threads to finish. However, the latency for this will usually be low, as both
running JavaScript and the event loop are interrupted to generate the report.</p>
