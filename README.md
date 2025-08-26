# aggreGATOR

aggreGATOR is a command-line RSS aggregator built with TypeScript, Node.js, and PostgreSQL. It allows users to register, log in, add RSS feeds, follow/unfollow feeds, and browse aggregated posts.

## Features

- User registration and login
- Add and list RSS feeds
- Follow and unfollow feeds
- Browse aggregated posts from followed feeds
- Periodic feed aggregation and post collection

## Project Structure

```
.
├── src/
│   ├── commands/         # CLI command handlers
│   ├── lib/
│   │   ├── db/           # Database schema, queries, and migrations
│   │   ├── rss.ts        # RSS feed fetching and parsing
│   │   └── time.ts       # Utility for parsing durations
│   ├── config.ts         # Configuration management
│   ├── index.ts          # CLI entry point
│   └── middleware.ts     # Middleware for command handlers
├── drizzle.config.ts     # Drizzle ORM configuration
├── package.json
├── tsconfig.json
└── README.md
```

## Requirements

- Node.js (v18+ recommended)
- PostgreSQL database

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Configure the database:**
   - Create a PostgreSQL database.
   - Create a `.gatorconfig.json` file in your home directory with the following content:
     ```json
     {
       "db_url": "postgres://username:password@localhost:5432/dbname",
       "current_user_name": ""
     }
     ```

3. **Run database migrations:**
   ```sh
   npx drizzle-kit push:pg
   ```

## Usage

Start the CLI:

```sh
npm start -- <command> [args...]
```

### Available Commands

- `register <name>` — Register a new user
- `login <name>` — Log in as an existing user
- `users` — List all users
- `addfeed <feed_name> <url>` — Add a new RSS feed (must be logged in)
- `feeds` — List all feeds
- `follow <feed_url>` — Follow a feed (must be logged in)
- `following` — List followed feeds (must be logged in)
- `unfollow <feed_url>` — Unfollow a feed (must be logged in)
- `browse [limit]` — Browse posts from followed feeds (must be logged in)
- `agg <interval>` — Start the aggregator (e.g., `agg 1m` for every minute)
- `reset` — Reset the database (delete all users)

### Example

```sh
npm start -- register alice
npm start -- login alice
npm start -- addfeed "Example Feed" https://example.com/rss
npm start -- follow https://example.com/rss
npm start -- browse 5
npm start -- agg 1m
```

## Development

- TypeScript configuration: [tsconfig.json](tsconfig.json)
- Database schema: [src/lib/db/schema.ts](src/lib/db/schema.ts)
- Main entry point: [src/index.ts](src/index.ts)

## License

ISC

---

*Built with [Drizzle ORM](https://orm.drizzle.team/) and