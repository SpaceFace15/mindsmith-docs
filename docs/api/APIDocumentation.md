
# API Documentation

An API (Application Programming Interface) allows for fast access to various resources. Common uses include manipulating data in a database (such as MongoDB or SQL Server) or accessing specific endpoints for different actions. APIs function through a client-server relationship. Even if you don't think you've ever used one, you likely have. When you search something on Google or watch a video on YouTube, you're interacting with APIs. 

Mindsmith utilizes APIs for managing its course and lesson materials. With over 20 unique APIs, this document explains 6 of them in depth. For beginners, don't worry—this guide will break down every term like Request, Response, JSON, and Endpoint. If you're unfamiliar with APIs, this document is a great starting point. 

The following details the selected Mindsmith API endpoints, explaining how to interact with them and how data is transmitted. 

---

## API 1: Dashboard Initialization

**Endpoint:**  
GET /api/trpc/organization.getDashboardRecentItems,organization.getOrgTierAndStatus,...?batch=1

**Purpose:**  
Returns all necessary data to render the user dashboard.

**Example Request:**

```
GET /api/trpc/organization.getDashboardRecentItems,...?batch=1&input={...}
```

**Example Response:**

```json
[
  {
    "result": {
      "data": {
        "recentItems": [...]
      }
    }
  },
  {
    "result": {
      "data": {
        "tier": "Pro",
        "status": "Active"
      }
    }
  },
  ...
]
```

---

## API 2: Create a Lesson – Initial Load

**Endpoint:**  
GET /api/trpc/organization.getOrganizationProjects,...?batch=1

**Purpose:**  
Initializes the lesson editor when creating a new lesson.

**Example Request:**

```
GET /api/trpc/organization.getOrganizationProjects,...?batch=1&input={...}
```

**Example Response:**

```json
[
  {
    "result": {
      "data": {
        "projects": [...]
      }
    }
  },
  ...
]
```

---

## API 3: Create Starter Lesson

**Endpoint:**  
POST /api/trpc/lesson.createStarterLesson?batch=1

**Purpose:**  
Generates a new course using AI based on a topic.

**Request Example:**

```json
{
  "0": {
    "json": {
      "language": "EN",
      "topic": "Photosynthesis"
    }
  }
}
```

**Response:**

```json
{
  "result": {
    "data": {
      "lessonId": "abc123",
      "title": "Photosynthesis"
    }
  }
}
```

---

## API 4: Get Course Sharing Info & Org Status

**Endpoint:**  
GET /api/trpc/courseRouter.getCourseSharingInfo,organization.getLastSelectedOrganizationId,organization.getOrgTierAndStatus?batch=1

**Purpose:**  
Checks if a course can be shared and retrieves org context and tier.

**Request Input (JSON):**

```json
{
  "0": {
    "json": {
      "courseId": "cma4bvhaz00k5ho0dkk42gdzx"
    }
  },
  "1": {
    "json": null,
    "meta": {
      "values": ["undefined"]
    }
  },
  "2": {
    "json": {
      "organizationId": "cm992d7xb01nyblmvecror95b"
    }
  }
}
```

**Response Example:**

```json
[
  {
    "result": {
      "data": {
        "isPublic": false,
        "canBeShared": true,
        "shareUrl": "https://mindsmith.ai/s/cma4bvhaz00k5ho0dkk42gdzx"
      }
    }
  },
  {
    "result": {
      "data": {
        "organizationId": "cm992d7xb01nyblmvecror95b"
      }
    }
  },
  {
    "result": {
      "data": {
        "tier": "Pro",
        "status": "Active"
      }
    }
  }
]
```

---

## API 5: Create New Blank Page

**Endpoint:**  
POST /api/trpc/realtime.executeTransactions?batch=1

**Purpose:**  
Adds a new blank lesson block to a course.

**Headers Required:**

- Content-Type: application/json
- Auth Cookie: __Secure-next-auth.session-token

**Request Body:**

```json
{
  "0": {
    "json": {
      "lessonId": "cma4bxpw900onho0d6pd9v1z2",
      "language": "EN",
      "transactions": [
        {
          "label": "insertPages",
          "mutations": [
            {
              "type": "lessonBlockOrderUpdate",
              "after": ["uuid1", "uuid2"]
            },
            {
              "type": "lessonBlockInsert",
              "block": {
                "id": "new-uuid",
                "type": "blank",
                "content": {}
              }
            }
          ]
        }
      ]
    }
  }
}
```

**Response:**

```json
{
  "result": {
    "type": "data",
    "data": {
      "status": "success"
    }
  }
}
```

---

## API 6: Get Sidebar Dashboard Data

**Endpoint:**  
GET /api/trpc/organization.getFullSidebarItems,...,organization.getUserData?batch=1

**Purpose:**  
Retrieves all data necessary to populate the sidebar UI.

**Input Parameters:**

```json
{
  "0": {
    "json": {
      "sortPreference": "recently-updated",
      "organizationId": "cm992d7xb01nyblmvecror95b",
      "projectId": null
    }
  },
  ...
}
```

**Response Highlights:**

- Recent projects and favorites
- Org tier, status, referral ID
- AI credit balance
- Admin role status

**Headers:**

- Content-Type: application/json
- Cookie: __Secure-next-auth.session-token

---

## Authentication Note

All endpoints require a valid Mindsmith session token set via a cookie:

**Cookie:** `__Secure-next-auth.session-token=your_token_here`

Use secure storage and transmission methods when handling authentication tokens.

---

## Batch Call Reminder

Many Mindsmith endpoints are designed for [tRPC batching](https://trpc.io/docs/client/batching). Input payloads must be JSON-URL-encoded and mapped to their respective endpoint indices:

- "0" → First endpoint
- "1" → Second endpoint
- etc.

Use consistent keys and batch parameter (?batch=1) in all applicable requests.

Learn more about APIs [here](https://spaceface15.github.io/frugal-u-docs/#/) This was a piece of API documentation that was made for a financial budget app. It explains the basics of APIs and has plenty of links to helpful resources. 

Have any general questions about Mindsmith? See the [Frequently Asked Questions](../faq/faq.md).


