class Github {
  constructor() {
    // Normally this wouldn't be hard coded, but this is here as just an app for practicing and portfolio's sake, so I am keeping it here before hooking it up to a database if I do
    this.client_id ='6dff774d4e5e94a3b3e8';
    this.client_secret = '60bf05038e2078e15d2fce8e5828d0313625fd04';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

   async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await reposResponse.json();

    return {
      profile,
      repos
    }
  }
}