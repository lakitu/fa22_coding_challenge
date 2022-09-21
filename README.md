# Krishin Wadhwani hack4Impact Coding Challenge

## Project Requirements

- Connected server to remote mongodb database
- Created Task schema with mongoose
- Created /put and /delete routes
- Linked CreateTask to the /create route
- Created UI for updating and deleting tasks
- Linked update and delete to server routes

## Additional Changes

- Converted the React code to Typescript
  - Javascript was giving me a headache; Typescript made my life a bit easier
- Added a description to each task
  - Made descriptions an optional field in the Task schema
  - Displayed in UI using tooltips
- Removed React Router and made the application a single page
- Set up socket.io to handle updates to the db
  - Previously, updates were handled by a ```useEffect``` loop which accessed the "/" route constantly
  - This caused slower performance and excess power drain
  - Now, the server listens for changes using ```Task.watch()``` and emits an event when the db changes
