// Auto-generated learning index

export const learningPosts = [
  {
    slug: 'AFIR',
    meta: {
    "title": "Artificial Force Induced Reaction (AFIR) Method",
    "date": "2025-04-1",
    "category": "AFIR",
    "tags": [
        "AFIR"
    ],
    "featured": true,
    "excerpt": "Some fundamentals of AFIR"
},
    content: `
# Understanding the AFIR Method: Mathematics and Terms

## 1. AFIR Function $F(Q)$

The AFIR function combines the natural energy of a system with an artificial force to help molecules react. It is defined as:

$$F(Q) = E(Q) + \\alpha \\frac{\\sum_{i \\in A} \\sum_{j \\in B} \\omega_{ij} r_{ij}}{\\sum_{i \\in A} \\sum_{j \\in B} \\omega_{ij}}$$

### Terms:
- **$E(Q)$:** The potential energy of the system at arrangement $Q$.
- **$\\alpha$:** A parameter controlling the strength of the artificial force.
- **$r_{ij}$:** Distance between atoms $i$ (in molecule A) and $j$ (in molecule B).
- **$\\omega_{ij}$:** A weight function that depends on the distance and types of atoms.

## 2. Weight Function $\\omega_{ij}$

The weight function scales the contribution of each pair of atoms based on their distance and sizes:

$$\\omega_{ij} = \\left[ \\frac{(R_i + R_j)}{r_{ij}} \\right]^p$$

### Terms:
- **$R_i$ and $R_j$:** Covalent radii of atoms $i$ and $j$.
- **$r_{ij}$:** Distance between atoms $i$ and $j$.
- **$p$:** An exponent, typically set to 6.0.

### Example:
If $R_i = 1.5 \\, \\text{Å}$, $R_j = 1.2 \\, \\text{Å}$, and $r_{ij} = 2.0 \\, \\text{Å}$:

$$\\omega_{ij} = \\left[ \\frac{1.5 + 1.2}{2.0} \\right]^6 = \\left[ \\frac{2.7}{2.0} \\right]^6 \\approx 3.52$$

## 3. Parameter $\\alpha$

The strength of the artificial force is determined by:

$$\\alpha = \\frac{\\gamma}{\\left[ 2^{-\\frac{1}{6}} - (1 + \\sqrt{1 + \\frac{\\gamma}{e}})^{-\\frac{1}{6}} \\right] R_0}$$

### Terms:
- **$\\gamma$:** Model collision energy parameter (maximum energy for the artificial force).
- **$R_0 = 3.8164 \\, \\text{Å}$:** Equilibrium distance for the Ar-Ar pair.
- **$e = 1.0061 \\, \\text{kJ mol}^{-1}$:** Depth of the Lennard-Jones potential well for Ar-Ar.

### Example:
If $\\gamma = 10 \\, \\text{kJ mol}^{-1}$:

$$\\alpha = \\frac{10}{\\left[ 2^{-\\frac{1}{6}} - (1 + \\sqrt{1 + \\frac{10}{1.0061}})^{-\\frac{1}{6}} \\right] \\times 3.8164}$$

This calculation would yield a specific value for $\\alpha$, which scales the artificial force.

## 4. Arrangement $Q$

The arrangement $Q$ represents the positions of all atoms in the system. It is achieved through:

1. **Initial Guess:** Start with an approximate arrangement of molecules A, B, and C.
2. **Optimization:** Use the AFIR function to adjust the positions of the atoms, minimizing $F(Q)$.
3. **Iteration:** Repeat the process until the system converges to a stable arrangement.

## 5. Ar-Ar Pair

The Ar-Ar pair refers to two argon atoms and their interaction, modeled using the Lennard-Jones potential:

$$V(r) = 4 \\epsilon \\left[ \\left( \\frac{\\sigma}{r} \\right)^{12} - \\left( \\frac{\\sigma}{r} \\right)^6 \\right]$$

### Terms:
- **$\\epsilon = 1.0061 \\, \\text{kJ mol}^{-1}$:** Depth of the potential well.
- **$\\sigma = 3.8164 \\, \\text{Å}$:** Distance at which the potential is zero.

### Example:
For $r = 4.0 \\, \\text{Å}$:

$$V(4.0) = 4 \\times 1.0061 \\left[ \\left( \\frac{3.8164}{4.0} \\right)^{12} - \\left( \\frac{3.8164}{4.0} \\right)^6 \\right] \\approx -0.1 \\, \\text{kJ mol}^{-1}$$

## 6. Potential Well

The **potential well** is a concept used to describe the energy landscape of a system. It represents the energy of a system as a function of the positions of its atoms.

### Key Features:
- **Minimum Energy Point:** The bottom of the well corresponds to the most stable arrangement of the atoms.
- **Barrier Height:** The energy required to move from one stable arrangement to another.
- **Depth ($\\epsilon$):** The depth of the well indicates how strongly the atoms are bound together.

### Example:
In the Lennard-Jones potential for the Ar-Ar pair:
- The depth of the well ($\\epsilon$) is $1.0061 \\, \\text{kJ mol}^{-1}$.
- The minimum energy occurs at $r = 2^{1/6} \\sigma \\approx 4.28 \\, \\text{Å}$.

## Summary

- The AFIR method uses the function $F(Q)$ to combine natural energy with an artificial force.
- The weight function $\\omega_{ij}$ scales the contribution of atom pairs.
- The parameter $\\alpha$ controls the strength of the artificial force, derived from the Ar-Ar pair.
- Arrangement $Q$ is achieved through iterative optimization.
- The Ar-Ar pair provides a simple reference for calibrating the artificial force.
- The **potential well** describes the energy landscape of the system, with a minimum energy point and a barrier height.`
  },
  {
    slug: 'BGFGS',
    meta: {
    "title": "BFGS Optimization",
    "date": "2024-01-15",
    "category": "AI General",
    "tags": [
        "Optimization"
    ],
    "featured": true,
    "excerpt": "The basics of overview of gradient gradient descent",
    "author": "Sriram"
},
    content: `
# BFGS Optimization: Mathematical Concepts Simplified

## 1. Gradient Descent - The Starting Point

Gradient descent is like walking downhill to find the lowest point of a mountain.

**The Update Rule:**
$$x_{k+1} = x_k - \\alpha \\nabla f(x_k)$$

**What this means:**

- $x_k$ is your current position
- $\\nabla f(x_k)$ is the gradient (steepest slope direction)
- $\\alpha$ is the step size (how big steps you take)
- We subtract the gradient because we want to go **downhill** (negative direction)

**Key insight:** The gradient points uphill, so negative gradient points downhill - that's where we want to go!

## 2. Newton's Method - Using Curvature Information

Imagine you're not just looking at the slope, but also how the slope is changing (is it getting steeper or flatter?).

**Taylor Series Approximation (2nd order):**
$$f(x_k + \\epsilon) \\approx f(x_k) + f'(x_k)\\epsilon + \\frac{1}{2}f''(x_k)\\epsilon^2$$

**Finding the minimum:** Take the derivative and set it to zero:
$$\\frac{d}{d\\epsilon}[f(x_k) + f'(x_k)\\epsilon + \\frac{1}{2}f''(x_k)\\epsilon^2] = 0$$
$$f'(x_k) + f''(x_k)\\epsilon = 0$$
$$\\epsilon = -\\frac{f'(x_k)}{f''(x_k)}$$

**Newton's Update Rule (multidimensional):**
$$x_{k+1} = x_k - H^{-1}_k \\nabla f(x_k)$$

**What this means:**

- $\\nabla f(x_k)$ is the gradient (first derivative in multiple dimensions)
- $H_k$ is the Hessian matrix (second derivatives in multiple dimensions)
- $H^{-1}_k$ is the inverse of the Hessian

**The Hessian Matrix:**

$$
H = \\begin{bmatrix}
\\frac{\\partial^2 f}{\\partial x_1^2} & \\frac{\\partial^2 f}{\\partial x_1 \\partial x_2} & \\cdots \\\\
\\frac{\\partial^2 f}{\\partial x_2 \\partial x_1} & \\frac{\\partial^2 f}{\\partial x_2^2} & \\cdots \\\\
\\vdots & \\vdots & \\ddots
\\end{bmatrix}
$$

**Key insight:** Newton's method is much faster but very expensive to compute!

## 3. Quasi-Newton Methods - The Best of Both Worlds

The idea: Instead of computing the exact Hessian, approximate it!

**Basic Formula:**
$$x_{k+1} = x_k - B_k^{-1} \\nabla f(x_k)$$

Where $B_k$ is our **approximation** of the Hessian.

**The Quasi-Newton Condition (Secant Equation):**
$$B_{k+1} \\Delta x_k = y_k$$

Where:

- $\\Delta x_k = x_{k+1} - x_k$ (the step we just took)
- $y_k = \\nabla f(x_{k+1}) - \\nabla f(x_k)$ (how the gradient changed)

**What this means:** The approximate Hessian should satisfy the same relationship as the true Hessian would.

**In matrix form:**
$$B_{k+1} (x_{k+1} - x_k) = \\nabla f(x_{k+1}) - \\nabla f(x_k)$$

## 4. The Underdetermined Problem

**The Challenge:** In n dimensions:

- Hessian has $\\frac{n(n+1)}{2}$ unique elements (it's symmetric)
- But we only have n equations from the quasi-Newton condition
- So we need **additional constraints** to solve for B!

## 5. BFGS - The Solution

BFGS (Broyden-Fletcher-Goldfarb-Shanno) cleverly solves the underdetermined problem by adding smart constraints. Here's how:

### The Core Insight

Since we have more unknowns than equations, BFGS adds these constraints:

1. **Preserve symmetry** and **positive-definiteness**
2. **Minimize the change** between $B_{k+1}$ and $B_k$

**Why these constraints?**

- **Symmetry**: The true Hessian is always symmetric, so our approximation should be too
- **Positive-definiteness**: For convex functions, the Hessian is positive-definite (this ensures we're moving toward a minimum, not a maximum)
- **Minimal change**: We want to update our approximation smoothly, not drastically

### The Mathematical Formulation

**The Optimization Problem:**
$\\min_{B_{k+1}} ||B_{k+1} - B_k||_F^2$
Subject to:

- $B_{k+1} \\Delta x_k = y_k$ (quasi-Newton condition)
- $B_{k+1}$ is symmetric and positive-definite

**What this means in plain English:**
"Find the new Hessian approximation $B_{k+1}$ that is as close as possible to the previous one $B_k$, while still satisfying the quasi-Newton condition."

### Working with the Inverse (More Practical)

In practice, we actually work with $H = B^{-1}$ (the inverse Hessian) because:

- Newton's method requires $B^{-1}$, not $B$
- Computing $B^{-1}$ directly is more efficient than computing $B$ and then inverting it

**Alternative formulation (for the inverse):**
$\\min_{H_{k+1}} ||H_{k+1} - H_k||_F^2$
Subject to:

- $H_{k+1} y_k = \\Delta x_k$ (inverted quasi-Newton condition)
- $H_{k+1}$ is symmetric

Where $H_k = B_k^{-1}$

### Understanding the Frobenius Norm

The **Frobenius norm** measures how "different" two matrices are:
$||A||_F = \\sqrt{\\sum_{i,j} |A_{ij}|^2}$

**Think of it as:** The square root of the sum of squares of all matrix elements. It's like the Euclidean distance but for matrices.

**Why this norm?** Different norms lead to different quasi-Newton methods. The Frobenius norm was chosen for BFGS because:

- It's mathematically tractable
- It leads to a computationally efficient solution
- It preserves positive-definiteness

### The Inverted Quasi-Newton Condition

Notice how the condition changes when we work with the inverse:

- **Original**: $B_{k+1} \\Delta x_k = y_k$
- **Inverted**: $H_{k+1} y_k = \\Delta x_k$

This comes from the fact that if $B \\Delta x = y$, then $B^{-1} y = \\Delta x$.

**Physical interpretation:** The inverse Hessian tells us how much we should move ($\\Delta x$) given a change in gradient ($y$).

### Why This Approach Works

1. **Uniqueness**: These constraints provide just enough information to uniquely determine $H_{k+1}$
2. **Efficiency**: We avoid computing the full Hessian while still capturing second-order information
3. **Stability**: The minimal change principle ensures the algorithm remains stable
4. **Convergence**: The resulting updates lead to superlinear convergence for well-behaved functions

This optimization problem, while complex to state, leads to a surprisingly elegant closed-form solution that we'll see in the next section.

## 6. The BFGS Update Formula

**Rank-Two Update:**
$$B_{k+1} = B_k + U_k + V_k$$

Where $U_k$ and $V_k$ are rank-one matrices of the form:

- $U_k = a_k u_k u_k^T$
- $V_k = b_k v_k v_k^T$

**Final BFGS Update for B:**
$$B_{k+1} = B_k + \\frac{y_k y_k^T}{y_k^T \\Delta x_k} - \\frac{B_k \\Delta x_k \\Delta x_k^T B_k}{\\Delta x_k^T B_k \\Delta x_k}$$

**BFGS Update for B⁻¹ (what we actually compute):**

$$B_{k+1}^{-1} = \\left(I - \\frac{\\Delta x_k y_k^T}{y_k^T \\Delta x_k}\\right) B_k^{-1} \\left(I - \\frac{y_k \\Delta x_k^T}{y_k^T \\Delta x_k}\\right) + \\frac{\\Delta x_k \\Delta x_k^T}{y_k^T \\Delta x_k}$$

## 7. Understanding the BFGS Update Components

**First term removal:**
$$- \\frac{B_k \\Delta x_k \\Delta x_k^T B_k}{\\Delta x_k^T B_k \\Delta x_k}$$
This **removes** information from the old approximation in the direction of $\\Delta x_k$.

**Second term addition:**
$$+ \\frac{y_k y_k^T}{y_k^T \\Delta x_k}$$
This **adds** new information in the direction of $y_k$.

**Key insight:** BFGS carefully balances old and new information to create the best approximation.

## 8. Why Rank-Two Updates?

**Positive-Definiteness Preservation:**
For any vector $z$, if $B_k^{-1}$ is positive-definite:
$$z^T B_{k+1}^{-1} z = z^T B_k^{-1} z - \\frac{(\\Delta x_k^T z)^2}{y_k^T \\Delta x_k} + \\frac{(y_k^T z)^2}{y_k^T \\Delta x_k}$$

Both terms are non-negative (given the curvature condition $y_k^T \\Delta x_k > 0$), so positive-definiteness is preserved.

**Key insight:** Rank-one updates don't preserve positive-definiteness, but rank-two updates do!

## 9. Algorithm Summary

1. **Initialize:** Set $B_0^{-1}$ (often to identity matrix $I$)
2. **For each iteration k:**
   - Compute $x_{k+1} = x_k - B_k^{-1} \\nabla f(x_k)$
   - Calculate $\\Delta x_k = x_{k+1} - x_k$
   - Calculate $y_k = \\nabla f(x_{k+1}) - \\nabla f(x_k)$
   - Update $B_{k+1}^{-1}$ using the BFGS formula
3. **Repeat** until convergence

## 10. Why BFGS Works

**Efficiency:**

- Avoids computing the actual Hessian ($O(n^3)$ operation)
- Only requires gradients and previous information

**Convergence:**

- Faster than gradient descent (uses curvature information)
- More stable than Newton's method

**Memory:**

- Only stores one $n \\times n$ matrix instead of computing Hessian each time

The beauty of BFGS is that it approximates the benefits of Newton's method while avoiding its computational costs!


 self.fcalc_label_combo.setCurrentText([x for x in fcalc_labels if  x in ['FC,PHIC', 'F-model,PHIF-model']][0])`
  }
];

export const getAllLearningPosts = () => {
  return learningPosts.sort((a, b) => new Date(b.meta.date) - new Date(a.meta.date));
};

export const getLearningPostBySlug = (slug) => {
  return learningPosts.find(post => post.slug === slug);
};