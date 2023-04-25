"""Module providingFunction printing python version."""
import numpy as np
N = 4
H = 1/(N)
A = np.zeros((N-1, N-1), dtype=float)
B = np.zeros(N-1)
X = np.linspace(0, 1, N+1)
print(X)
U_0 = 0
U_4 = 2
for i in range(N-1):
    if i == 0:
        A[i, i] = -36
        A[i, i+1] = 16
    elif i == 2:
        A[i, i-1] = 16
        A[i, i] = -36
    else:
        A[i, i-1] = 16
        A[i, i] = -36
        A[i, i+1] = 16
print(A)

for i in range(N-1):
    if i == N-2:
        B[i] = -4*X[i+1]-32
    else:
        B[i] = -4*X[i+1]
print(B)
u = np.linalg.solve(A, B)
print(u)
