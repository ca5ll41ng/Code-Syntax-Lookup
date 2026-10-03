# LICENSES — 语料与数据来源声明

本仓库代码（sources/ pipeline/ server/ test/ docs-site/ 构建脚本）以 **MIT** 许可发布。

语料与数据来自下列来源，分发或二次使用时请保留对应署名与许可声明：

| 语料 | 来源 | 许可证 | 署名要求 |
|---|---|---|---|
| PHP 手册（函数/语言参考） | php/doc-en、php/doc-zh（https://github.com/php/doc-en） | CC BY 3.0 | 署名 "The PHP Documentation Group"，附许可链接 https://www.php.net/manual/zh/copyright.php |
| Python 文档（标准库/语言参考/教程） | CPython Doc/（https://github.com/python/cpython） | PSF License（见 https://docs.python.org/3/license.html） | 保留 PSF 许可声明 |
| Python 文档中文翻译 | python-docs-zh-cn 3.14 分支（https://github.com/python/python-docs-zh-cn） | PSF License | 同上 |
| Python 官方 PEG 语法 | CPython Grammar/python.gram | PSF License | 同上 |
| Java API 文档（javadoc 提取） | OpenJDK jdk 仓库（https://github.com/openjdk/jdk） | GPLv2 with Classpath Exception | 本仓库仅自用检索；如分发衍生文档需遵循原许可 |
| Java 语法（ANTLR 移植） | antlr/grammars-v4 java/（https://github.com/antlr/grammars-v4） | MIT | 保留仓库出处 |
| PHP 危险函数/污点数据 | designsecurity/progpilot（https://github.com/designsecurity/progpilot） | MIT | 保留版权声明 |
| Python 危险调用规则 | PyCQA/bandit（https://github.com/PyCQA/bandit） | Apache-2.0 | 保留许可与出处 |
| Java 污点 sink 清单 | find-sec-bugs（https://github.com/find-sec-bugs） | LGPL-3.0 | 使用需保留出处声明；再分发衍生规则库需遵循 LGPL |
| 安全指南（127 篇） | OWASP Cheat Sheet Series（https://github.com/OWASP/CheatSheetSeries） | CC BY-SA 4.0 | 署名 OWASP Foundation；**衍生内容需以同方式（CC BY-SA）共享** |

## 明确未纳入的来源（许可红线）

- Semgrep 社区规则（自定义许可，禁止再分发）
- SonarSource 语言规则文本（SSALv1，源可见非开源）
- 无许可证仓库：gto76/python-cheatsheet、JoyChou93/java-sec-code、j3ers3/Hello-Java-Sec、hongriSec/PHP-Audit-Labs
- GPL 系语料（DVWA 等）仅作阅读参考，内容未进入本知识库
