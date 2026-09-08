# Flows

## Application Overview

Flows for core APIs.

## Test Scenarios

### 1. Request JWT Token

**Seed:** `tests/seed.spec.ts`

#### 1.1. Request JWT Token

**File:** `tests/request-jwt-token.spec.ts`

**Steps:**
  1. Open POST /api/authenticate and click Try it out.
    - expect: Token request endpoint is ready.
  2. Enter valid credentials and click Execute.
    - expect: 200 response includes JWT token.
  3. Store token for Authorization.
    - expect: Token can be reused for protected endpoints.

### 2. List Video Games

**Seed:** `tests/seed.spec.ts`

#### 2.1. List Video Games

**File:** `tests/list-video-games.spec.ts`

**Steps:**
  1. Open GET /api/v2/videogame.
    - expect: List endpoint is available.
  2. Click Execute.
    - expect: Response returns status 200.
  3. Review response data.
    - expect: Payload is an array of games.

### 3. Get Video Game By ID

**Seed:** `tests/seed.spec.ts`

#### 3.1. Get Video Game By ID

**File:** `tests/get-video-game-by-id.spec.ts`

**Steps:**
  1. Open GET /api/v2/videogame/{id} and click Try it out.
    - expect: Path parameter input is available.
  2. Enter an existing id and click Execute.
    - expect: Response returns status 200.
  3. Inspect object in response.
    - expect: Returned id matches requested id.

### 4. Get Video Game By Invalid ID

**Seed:** `tests/seed.spec.ts`

#### 4.1. Get Video Game By Invalid ID

**File:** `tests/get-video-game-by-invalid-id.spec.ts`

**Steps:**
  1. Open GET /api/v2/videogame/{id} and click Try it out.
    - expect: Path parameter input is available.
  2. Enter a non-existing id and click Execute.
    - expect: Response returns status 404.
  3. Verify error message.
    - expect: Error indicates resource not found.

### 5. Create Video Game With Auth

**Seed:** `tests/seed.spec.ts`

#### 5.1. Create Video Game With Auth

**File:** `tests/create-video-game-with-auth.spec.ts`

**Steps:**
  1. Authorize with Bearer token from POST /api/authenticate.
    - expect: Swagger UI is in authorized state.
  2. Open POST /api/v2/videogame, provide valid JSON, and click Execute.
    - expect: Request is accepted with valid body.
  3. Check response.
    - expect: Response returns status 200 for authorized create.

### 6. Update Video Game With Auth

**Seed:** `tests/seed.spec.ts`

#### 6.1. Update Video Game With Auth

**File:** `tests/update-video-game-with-auth.spec.ts`

**Steps:**
  1. Keep valid Bearer token authorized.
    - expect: Authorization remains active.
  2. Open PUT /api/v2/videogame/{id}, enter existing id with valid update JSON, and execute.
    - expect: Request executes with id and body.
  3. Check response status.
    - expect: Response is 200 for valid id or 404 for unknown id.

### 7. Delete Video Game With Auth

**Seed:** `tests/seed.spec.ts`

#### 7.1. Delete Video Game With Auth

**File:** `tests/delete-video-game-with-auth.spec.ts`

**Steps:**
  1. Keep valid Bearer token authorized.
    - expect: Authorization remains active.
  2. Open DELETE /api/v2/videogame/{id}, enter existing id, and click Execute.
    - expect: Delete request is submitted.
  3. Check response status.
    - expect: Response is 200 for valid id or 404 for unknown id.
