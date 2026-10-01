---
id: "zh-php-guide-fann-constants"
language: "php"
lang: "zh"
category: "guide"
name: "fann.constants"
title: "预定义常量"
module: "fann"
source_url: "https://www.php.net/manual/zh/fann.constants.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# 预定义常量

下列常量由此扩展定义，且仅在此扩展编译入 PHP 或在运行时动态载入时可用。

- **`FANN_TRAIN_INCREMENTAL` (`int`)** — 标准反向传播算法，每次训练匹配后权重都会更新。这意味着在每个单历元中权重会被更新很多次。因为这个原因，很多问题使用这个算法将会训练的非常快，然而其他更高级的问题的训练效果不是很好。
- **`FANN_TRAIN_BATCH` (`int`)** — 标准反向传播算法，计算均方差误差后权重值将会更新。 这意味着每个单历元只会更新一次。因为这个原因，很多问题使用这个算法会训练的很慢。但是计算出的均方差误差比增量训练的效果更好，使用这个算法某些问题将会得到更好的解决方案。
- **`FANN_TRAIN_RPROP` (`int`)** — 一个更高级的批训练算法，对于很多问题该算法还会获得很好的结果。RPROP 训练算法是自适应的，因此不需要使用 learning_rate. 其他一些参数用来设置 RPROP 算法工作的方式，只推荐给那些知道 RPROP 算法如何工作的人来设置。RPROP 训练算法是被 Riedmiller 和 BraunSome 在1993年提出来的，实际上此处使用的是由 Igel 和 Husken 在2000年提出来的 iRPROP 训练算法，它是标准 RPROP 训练算法的一个变种。
- **`FANN_TRAIN_QUICKPROP` (`int`)** — 一个更高级的批训练算法，对于很多问题该算法还会获得很好的结果。quickprop 训练算法使用 learning_rate 参数和其他更高级的参数， 但是只有当用户真正明白 quickprop 训练算法如何工作的时候才建议修改这些高级参数。 quickprop 训练算法是被 Fahlman 在1988年描述的。
- **`FANN_TRAIN_SARPROP` (`int`)** — 更高级的训练算法，只在2.2版本中可用。

- **`FANN_LINEAR` (`int`)** — 线性激励函数。
- **`FANN_THRESHOLD` (`int`)** — 阈值激励函数。
- **`FANN_THRESHOLD_SYMMETRIC` (`int`)** — 阈值激励函数。
- **`FANN_SIGMOID` (`int`)** — Sigmoid激励函数。
- **`FANN_SIGMOID_STEPWISE` (`int`)** — 逐步线性逼近 Sigmoid 激励函数。
- **`FANN_SIGMOID_SYMMETRIC` (`int`)** — 对称 Sigmoid 激励函数， 又名：tanh.
- **`FANN_SIGMOID_SYMMETRIC_STEPWISE` (`int`)** — 逐步线性逼近对称 Sigmoid 激励函数。
- **`FANN_GAUSSIAN` (`int`)** — Gaussian (高斯) 激励函数。
- **`FANN_GAUSSIAN_SYMMETRIC` (`int`)** — 对称 gaussian (高斯)激励函数。
- **`FANN_GAUSSIAN_STEPWISE` (`int`)** — 逐步 gaussian (高斯)激励函数。
- **`FANN_ELLIOT` (`int`)** — 快速(类sigmoid)激励函数，由 David Elliott 定义的。
- **`FANN_ELLIOT_SYMMETRIC` (`int`)** — 快速(类对称sigmoid)激励函数，由 David Elliott定义的。
- **`FANN_LINEAR_PIECE` (`int`)** — 有界线性激励函数。
- **`FANN_LINEAR_PIECE_SYMMETRIC` (`int`)** — 有界线性激励函数。
- **`FANN_SIN_SYMMETRIC` (`int`)** — 周期sin(正弦)激励函数。
- **`FANN_COS_SYMMETRIC` (`int`)** — 周期cos(余弦)激励函数。
- **`FANN_SIN` (`int`)** — 周期sin(正弦)激励函数。
- **`FANN_COS` (`int`)** — 周期cos(余弦)激励函数。

- **`FANN_ERRORFUNC_LINEAR` (`int`)** — 标准线性误差函数。
- **`FANN_ERRORFUNC_TANH` (`int`)** — Tanh 误差函数；通常更好但是要求更低的学习率。该误差函数当有目标输出时将会和期望值有很大的不同，然而没有目标输出时略有不同。不推荐用于级联或增量训练。

- **`FANN_STOPFUNC_MSE` (`int`)** — 停止准则是均方误差(MSE)值。
- **`FANN_STOPFUNC_BIT` (`int`)** — 停止准则是失败时的比特位数。比特位数意味着输出神经元的个数超过了失败时的比特位数 (参考 fann_get_bit_fail_limit, fann_set_bit_fail_limit). 位数在所有的训练数据中都会被计数，所以这个数组将会比训练数据的数量更高。

- **`FANN_NETTYPE_LAYER` (`int`)** — 每一层只能连接下一层。
- **`FANN_NETTYPE_SHORTCUT` (`int`)** — 每一层与所有以下层有连接。

- **`FANN_E_NO_ERROR` (`int`)** — 无误差。
- **`FANN_E_CANT_OPEN_CONFIG_R` (`int`)** — 无法打开读取配置文件。
- **`FANN_E_CANT_OPEN_CONFIG_W` (`int`)** — 无法打开写入配置文件。
- **`FANN_E_WRONG_CONFIG_VERSION` (`int`)** — 配置文件的错误版本。
- **`FANN_E_CANT_READ_CONFIG` (`int`)** — 从配置文件读取信息的错误。
- **`FANN_E_CANT_READ_NEURON` (`int`)** — 从配置文件读取神经元信息的错误。
- **`FANN_E_CANT_READ_CONNECTIONS` (`int`)** — 从配置文件读取连接的错误。
- **`FANN_E_WRONG_NUM_CONNECTIONS` (`int`)** — 连接数和期望的值不相等。
- **`FANN_E_CANT_OPEN_TD_W` (`int`)** — 无法打开训练数据文件写入内容。
- **`FANN_E_CANT_OPEN_TD_R` (`int`)** — 无法打开训练数据文件读取内容。
- **`FANN_E_CANT_READ_TD` (`int`)** — 从文件读取训练数据错误。
- **`FANN_E_CANT_ALLOCATE_MEM` (`int`)** — 无法分配内存。
- **`FANN_E_CANT_TRAIN_ACTIVATION` (`int`)** — 无法使用已选的激励函数训练。
- **`FANN_E_CANT_USE_ACTIVATION` (`int`)** — 无法使用已选的激励函数。
- **`FANN_E_TRAIN_DATA_MISMATCH` (`int`)** — 两个 fann_train_data 结构体之间存在不可调和的差异。
- **`FANN_E_CANT_USE_TRAIN_ALG` (`int`)** — 不能使用已选的训练算法。
- **`FANN_E_TRAIN_DATA_SUBSET` (`int`)** — 尝试获取不在训练集内的子集。
- **`FANN_E_INDEX_OUT_OF_BOUND` (`int`)** — 索引超出了界限。
- **`FANN_E_SCALE_NOT_PRESENT` (`int`)** — 标定参数不存在。
- **`FANN_E_INPUT_NO_MATCH` (`int`)** — 在人工神经网络和 data 中的输入神经元个数不匹配
- **`FANN_E_OUTPUT_NO_MATCH` (`int`)** — 在人工神经网络和数据中的输出神经元个数不匹配。
