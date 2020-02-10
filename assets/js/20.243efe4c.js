(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{257:function(s,t,a){"use strict";a.r(t);var e=a(2),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"linux-文件内容查看编辑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linux-文件内容查看编辑"}},[s._v("#")]),s._v(" Linux 文件内容查看编辑")]),s._v(" "),a("blockquote",[a("p",[s._v("关键词："),a("code",[s._v("cat")]),s._v(", "),a("code",[s._v("head")]),s._v(", "),a("code",[s._v("tail")]),s._v(", "),a("code",[s._v("more")]),s._v(", "),a("code",[s._v("less")]),s._v(", "),a("code",[s._v("sed")]),s._v(", "),a("code",[s._v("vi")]),s._v(", "),a("code",[s._v("grep")])])]),s._v(" "),a("h2",{attrs:{id:"_1-linux-文件内容查看编辑要点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-linux-文件内容查看编辑要点"}},[s._v("#")]),s._v(" 1. Linux 文件内容查看编辑要点")]),s._v(" "),a("ul",[a("li",[s._v("连接文件并打印到标准输出设备 - 使用 "),a("a",{attrs:{href:"#cat"}},[s._v("cat")])]),s._v(" "),a("li",[s._v("显示指定文件的开头若干行 - 使用 "),a("a",{attrs:{href:"#head"}},[s._v("head")])]),s._v(" "),a("li",[s._v("显示指定文件的末尾若干行，常用于实时打印日志文件内容 - 使用 "),a("a",{attrs:{href:"#tail"}},[s._v("tail")])]),s._v(" "),a("li",[s._v("显示文件内容，每次显示一屏 - 使用 "),a("a",{attrs:{href:"#more"}},[s._v("more")])]),s._v(" "),a("li",[s._v("显示文件内容，每次显示一屏 - 使用 "),a("a",{attrs:{href:"#less"}},[s._v("less")])]),s._v(" "),a("li",[s._v("自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等 - 使用 "),a("a",{attrs:{href:"#sed"}},[s._v("sed")])]),s._v(" "),a("li",[s._v("文本编辑器 - 使用 "),a("a",{attrs:{href:"#vi"}},[s._v("vi")])]),s._v(" "),a("li",[s._v("使用正则表达式搜索文本，并把匹配的行打印出来 - 使用 "),a("a",{attrs:{href:"#grep"}},[s._v("grep")])])]),s._v(" "),a("h2",{attrs:{id:"_2-命令常见用法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令常见用法"}},[s._v("#")]),s._v(" 2. 命令常见用法")]),s._v(" "),a("h3",{attrs:{id:"_2-1-cat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-cat"}},[s._v("#")]),s._v(" 2.1. cat")]),s._v(" "),a("blockquote",[a("p",[s._v("cat 命令用于连接文件并打印到标准输出设备上。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/cat")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" m1              "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在屏幕上显示文件 ml 的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" m1 m2           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 同时显示文件 ml 和 m2 的内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" m1 m2 "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将文件 ml 和 m2 合并后放入文件 file 中")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-2-head"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-head"}},[s._v("#")]),s._v(" 2.2. head")]),s._v(" "),a("blockquote",[a("p",[s._v("head 命令用于显示文件的开头内容。在默认情况下，head 命令显示文件的头部 10 行内容。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/head")])]),s._v(" "),a("h3",{attrs:{id:"_2-3-tail"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-tail"}},[s._v("#")]),s._v(" 2.3. tail")]),s._v(" "),a("blockquote",[a("p",[s._v("tail 命令用于显示文件的尾部内容。在默认情况下，tail 命令显示文件的尾部 10 行内容。如果给定的文件不止一个，则在显示的每个文件前面加一个文件名标题。如果没有指定文件或者文件名为“-”，则读取标准输入。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/tail")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示文件file的最后10行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -n +20 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示文件file的内容，从第20行至文件末尾")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" -c "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示文件file的最后10个字符")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-4-more"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-more"}},[s._v("#")]),s._v(" 2.4. more")]),s._v(" "),a("blockquote",[a("p",[s._v("more 命令是一个基于 vi 编辑器文本过滤器，它以全屏幕的方式按页显示文本文件的内容，支持 vi 中的关键字定位操作。more 名单中内置了若干快捷键，常用的有 H（获得帮助信息），Enter（向下翻滚一行），空格（向下滚动一屏），Q（退出命令）。")]),s._v(" "),a("p",[s._v("该命令一次显示一屏文本，满屏后停下来，并且在屏幕的底部出现一个提示信息，给出至今己显示的该文件的百分比：--More--（XX%）可以用下列不同的方法对提示做出回答：")]),s._v(" "),a("ul",[a("li",[s._v("按 Space 键：显示文本的下一屏内容。")]),s._v(" "),a("li",[s._v("按 Enier 键：只显示文本的下一行内容。")]),s._v(" "),a("li",[s._v("按斜线符|：接着输入一个模式，可以在文本中寻找下一个相匹配的模式。")]),s._v(" "),a("li",[s._v("按 H 键：显示帮助屏，该屏上有相关的帮助信息。")]),s._v(" "),a("li",[s._v("按 B 键：显示上一屏内容。")]),s._v(" "),a("li",[s._v("按 Q 键：退出 rnore 命令。")])]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/more")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示文件 file 的内容，但在显示之前先清屏，并且在屏幕的最下方显示完核的百分比。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" -dc "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 显示文件 file 的内容，每 10 行显示一次，而且在显示之前先清屏。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v(" -c -10 "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-5-less"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-less"}},[s._v("#")]),s._v(" 2.5. less")]),s._v(" "),a("p",[s._v("less 命令的作用与 more 十分相似，都可以用来浏览文字档案的内容，不同的是 less 命令允许用户向前或向后浏览文件，而 more 命令只能向前浏览。用 less 命令显示文件时，用 PageUp 键向上翻页，用 PageDown 键向下翻页。要退出 less 程序，应按 Q 键。")]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" /var/log/shadowsocks.log\n")])])]),a("h3",{attrs:{id:"_2-6-sed"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-6-sed"}},[s._v("#")]),s._v(" 2.6. sed")]),s._v(" "),a("blockquote",[a("p",[s._v("sed 是一种流编辑器，它是文本处理工具，能够完美的配合正则表达式使用，功能不同凡响。处理时，把当前处理的行存储在临时缓冲区中，称为“模式空间”（pattern space），接着用 sed 命令处理缓冲区中的内容，处理完成后，把缓冲区的内容送往屏幕。接着处理下一行，这样不断重复，直到文件末尾。文件内容并没有改变，除非你使用重定向存储输出。Sed 主要用来自动编辑一个或多个文件；简化对文件的反复操作；编写转换程序等。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/sed")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 替换文本中的字符串")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/book/books/'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -n 选项 和 p 命令 一起使用表示只打印那些发生替换的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -n "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/test/TEST/p'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 直接编辑文件选项 -i ，会匹配 file 文件中每一行的第一个 book 替换为 books")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/book/books/g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 使用后缀 /g 标记会替换每一行中的所有匹配")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'s/book/books/g'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除空白行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^$/d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件的第2行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2d'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件的第2行到末尾所有行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2,"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件最后一行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$d")]),s._v("'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除文件中所有开头是test的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sed")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'/^test/'")]),s._v("d "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n")])])]),a("h3",{attrs:{id:"_2-7-vi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-7-vi"}},[s._v("#")]),s._v(" 2.7. vi")]),s._v(" "),a("blockquote",[a("p",[s._v("vi 命令是 UNIX 操作系统和类 UNIX 操作系统中最通用的全屏幕纯文本编辑器。Linux 中的 vi 编辑器叫 vim，它是 vi 的增强版（vi Improved），与 vi 编辑器完全兼容，而且实现了很多增强功能。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/vi")]),s._v(" "),a("p",[s._v("引申阅读："),a("a",{attrs:{href:"https://github.com/dunwu/OS/blob/master/docs/vim.md",target:"_blank",rel:"noopener noreferrer"}},[s._v("Vim 入门指南"),a("OutboundLink")],1)])]),s._v(" "),a("h3",{attrs:{id:"_2-8-grep"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-8-grep"}},[s._v("#")]),s._v(" 2.8. grep")]),s._v(" "),a("blockquote",[a("p",[s._v("grep（global search regular expression(RE) and print out the line，全面搜索正则表达式并把行打印出来）是一种强大的文本搜索工具，它能使用正则表达式搜索文本，并把匹配的行打印出来。")]),s._v(" "),a("p",[s._v("参考：http://man.linuxde.net/grep")])]),s._v(" "),a("p",[s._v("示例：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在多级目录中对文本递归搜索(程序员搜代码的最爱）:")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -R -n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 忽略匹配样式中的字符大小写")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"hello world"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -i "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"HELLO"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 匹配多个模式:")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"class"')]),s._v(" -e "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vitural"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# 只在目录中所有的.php和.html文件中递归搜索字符"main()"')]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -r --include *."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("php,html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在搜索结果中排除所有README文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -r --exclude "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"README"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在搜索结果中排除filelist文件列表里的文件")]),s._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"main()"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" -r --exclude-from filelist\n")])])]),a("h2",{attrs:{id:"_3-参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-参考资料"}},[s._v("#")]),s._v(" 3. 参考资料")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"http://man.linuxde.net/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Linux 命令大全"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=n.exports}}]);