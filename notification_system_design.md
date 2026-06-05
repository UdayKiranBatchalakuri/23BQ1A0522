# Notification System Design

## Priority Rules

Notifications are prioritized using the following order:

1. Placement (Highest Priority)
2. Result
3. Event (Lowest Priority)

## Sorting Logic

* Notifications are first sorted by priority.
* If two notifications have the same type, the most recent notification is given higher priority.

## Algorithm

1. Fetch notifications from API.
2. Assign priority weights:

   * Placement = 3
   * Result = 2
   * Event = 1
3. Sort by priority descending.
4. Sort by timestamp descending within the same priority.
5. Return Top N notifications.

## Time Complexity

Sorting: O(n log n)

## Future Improvements

* Use a Min Heap for real-time notification processing.
* Store notifications in a database.
* Add caching for improved performance.
