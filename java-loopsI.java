// Given an integer, N, print its first 10 multiples. Each multiple N * i (where 1 <= i <= 10) should be printed on a new line in the form: N x i = result.

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(bufferedReader.readLine().trim());
        
        for (int i = 1; i <= 10; i++) {
            System.out.println(String.format("%d x %d = %d", N, i , N * i));
        }

        bufferedReader.close();
    }
}
