const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());

const dataPage = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const dataGroup = [
  { name: 'Group A', value: 55 },
  { name: 'Group B', value: 31 },
  { name: 'Group C', value: 14 },
];

app.get('/barchart', (req, res) => {
  res.json(dataPage);
});

app.get('/piechart', (req, res) => {
  res.json(dataGroup);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

{/*
long MOD = 998244353;

        long[] ans = new long[N];

        for (int i = 1; i <= N; i++) {
            long sum = 0;
            for (int j = L; j <= R; j++) {
                long term = binomial(K - j * (i - 1) + i - 1, i - 1, MOD);
                term = (term * binomial(j * N - K + i - 1, i - 1, MOD)) % MOD;
                term = (term * power(j, N - i, MOD)) % MOD;
                sum = (sum + term) % MOD;
            }
            ans[i - 1] = sum;
        }

        return ans;
    }

    static long binomial(long n, long k, long MOD) {
        long res = 1;
        for (long i = 0; i < k; ++i) {
            res = (res * (n - i)) % MOD;
            res = (res * modInverse(i + 1, MOD)) % MOD;
        }
        return res;
    }

    static long power(long base, long exp, long MOD) {
        long result = 1;
        while (exp > 0) {
            if (exp % 2 == 1) {
                result = (result * base) % MOD;
            }
            base = (base * base) % MOD;
            exp = exp / 2;
        }
        return result;
    }

    static long modInverse(long a, long m) {
        long m0 = m;
        long t, q;
        long x0 = 0, x1 = 1;

        if (m == 1) {
            return 0;
        }

        while (a > 1) {
            q = a / m;
            t = m;
            m = a % m;
            a = t;
            t = x0;
            x0 = x1 - q * x0;
            x1 = t;
        }

        if (x1 < 0) {
            x1 += m0;
        }

        return x1;
    }
*/}
