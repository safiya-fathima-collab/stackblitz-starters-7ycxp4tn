# Backend for Job Application Tracker

Imagine you're building the backend for a **job application tracker** that helps users manage their applications and interview progress. Your task is to independently set up an **Express.js** server and connect it to a **MongoDB** database using **Mongoose**.

This third self-paced assignment challenges you to write **robust** and **secure** connection logic. You’re expected to apply everything you've learned so far—writing clean connection code, using environment variables properly, and handling errors gracefully.

## Instructions

### 1. Initialize the Project

- Start with the provided Express boilerplate project.
- Open the terminal and install dependencies using:

  ```bash
  npm install
  ```

### 2. Set Up Environment Configuration

- Create a `.env` file in the root directory of your project.

- Add your MongoDB URI inside it like this:

  ```
  MONGO_URI=mongodb://localhost:27017/jobTrackerDB
  ```

- Avoid hardcoding credentials or URIs in your code files.

### 3. Connect Express to MongoDB

- Open the `index.js` file.

- If needed, set up the basic Express server structure.

- Use Mongoose to:

  - Load the `MONGO_URI` from the `.env` file
  - Attempt to connect to the `jobTrackerDB` database
  - Log appropriate messages for success or failure:

    - On success:
      `Connected to MongoDB`
    - On failure:
      `Error connecting to MongoDB: <error details>`

- Add extra error handling or connection options if needed to make your connection logic more reliable.

### 4. Test Your Backend

- Run the server using:

  ```bash
  node index.js
  ```

  or

  ```bash
  npm start
  ```

- Confirm that the connection message appears correctly in your terminal.

## How to Fork and Set Up Your Repository

### 1. Fork the StackBlitz Repository

- A StackBlitz project link will be shared with you.
- Click **Fork** to make your own editable copy.

### 2. Push to Your GitHub Repository

You can push manually or directly from StackBlitz.

#### Option A: Manual Push

1. Download the project from StackBlitz.
2. Open your terminal and run the following commands:

   ```bash
   git init
   git remote add origin <your_github_repo_url>
   git add .
   git commit -m "Connected job tracker backend to MongoDB"
   git push -u origin main
   ```

#### Option B: Direct Push via StackBlitz

- Use the **Push to GitHub** feature in StackBlitz to connect and upload your repo.

### 3. Submit Your Work

- After pushing your code to GitHub:

  1. Copy your repository URL.
  2. Submit it on the assignment submission portal.

#### Format:

`https://github.com/<your_username>/<repository_name>`

### Example Submission

If your GitHub username is `jayDev` and the repository is `job-tracker-backend`, submit:
`https://github.com/jayDev/job-tracker-backend`
