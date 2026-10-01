---
id: "en-php-guide-class-svm"
language: "php"
lang: "en"
category: "guide"
name: "class.svm"
title: "The SVM class"
module: "svm"
source_url: "https://www.php.net/manual/en/class.svm.php"
license: "CC-BY-3.0"
updated: "2026-10-01"
---

# The SVM class

SVM

   Introduction       Class Synopsis   `SVM`    `SVM`      `const` `int` `SVM::C_SVC` 0   `const` `int` `SVM::NU_SVC` 1   `const` `int` `SVM::ONE_CLASS` 2   `const` `int` `SVM::EPSILON_SVR` 3   `const` `int` `SVM::NU_SVR` 4   `const` `int` `SVM::KERNEL_LINEAR` 0   `const` `int` `SVM::KERNEL_POLY` 1   `const` `int` `SVM::KERNEL_RBF` 2   `const` `int` `SVM::KERNEL_SIGMOID` 3   `const` `int` `SVM::KERNEL_PRECOMPUTED` 4   `const` `int` `SVM::OPT_TYPE` 101   `const` `int` `SVM::OPT_KERNEL_TYPE` 102   `const` `int` `SVM::OPT_DEGREE` 103   `const` `int` `SVM::OPT_SHRINKING` 104   `const` `int` `SVM::OPT_PROBABILITY` 105   `const` `int` `SVM::OPT_GAMMA` 201   `const` `int` `SVM::OPT_NU` 202   `const` `int` `SVM::OPT_EPS` 203   `const` `int` `SVM::OPT_P` 204   `const` `int` `SVM::OPT_COEF_ZERO` 205   `const` `int` `SVM::OPT_C` 206   `const` `int` `SVM::OPT_CACHE_SIZE` 207          Predefined Constants  SVM Constants 
- **`SVM::C_SVC`** — The basic C_SVC SVM type. The default, and a good starting point
- **`SVM::NU_SVC`** — The NU_SVC type uses a different, more flexible, error weighting
- **`SVM::ONE_CLASS`** — One class SVM type. Train just on a single class, using outliers as negative examples
- **`SVM::EPSILON_SVR`** — A SVM type for regression (predicting a value rather than just a class)
- **`SVM::NU_SVR`** — A NU style SVM regression type
- **`SVM::KERNEL_LINEAR`** — A very simple kernel, can work well on large document classification problems
- **`SVM::KERNEL_POLY`** — A polynomial kernel
- **`SVM::KERNEL_RBF`** — The common Gaussian RBD kernel. Handles non-linear problems well and is a good default for classification
- **`SVM::KERNEL_SIGMOID`** — A kernel based on the sigmoid function. Using this makes the SVM very similar to a two layer sigmoid based neural network
- **`SVM::KERNEL_PRECOMPUTED`** — A precomputed kernel - currently unsupported.
- **`SVM::OPT_TYPE`** — The options key for the SVM type
- **`SVM::OPT_KERNEL_TYPE`** — The options key for the kernel type
- **`SVM::OPT_DEGREE`**
- **`SVM::OPT_SHRINKING`** — Training parameter, boolean, for whether to use the shrinking heuristics
- **`SVM::OPT_PROBABILITY`** — Training parameter, boolean, for whether to collect and use probability estimates
- **`SVM::OPT_GAMMA`** — Algorithm parameter for Poly, RBF and Sigmoid kernel types.
- **`SVM::OPT_NU`** — The option key for the nu parameter, only used in the NU_ SVM types
- **`SVM::OPT_EPS`** — The option key for the Epsilon parameter, used in epsilon regression
- **`SVM::OPT_P`** — Training parameter used by Episilon SVR regression
- **`SVM::OPT_COEF_ZERO`** — Algorithm parameter for poly and sigmoid kernels
- **`SVM::OPT_C`** — The option for the cost parameter that controls tradeoff between errors and generality - effectively the penalty for misclassifying training examples.
- **`SVM::OPT_CACHE_SIZE`** — Memory cache size, in MB
