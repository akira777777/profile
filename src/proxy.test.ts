import { describe, expect, it, vi } from "vitest";
import { proxy } from "./proxy";
import { NextResponse, type NextRequest } from "next/server";

vi.mock("next/server", () => {
  return {
    NextResponse: {
      next: vi.fn(() => ({ type: "next" })),
      rewrite: vi.fn((url: unknown) => ({ type: "rewrite", url })),
    },
  };
});

describe("Proxy Middleware", () => {
  it("should pass through requests that already contain a valid locale", () => {
    vi.clearAllMocks();
    const mockRequest = {
      nextUrl: {
        pathname: "/en",
      },
    } as unknown as NextRequest;

    const result = proxy(mockRequest);
    expect(NextResponse.next).toHaveBeenCalled();
    expect(result).toEqual({ type: "next" });
  });

  it("should pass through requests with sub-paths under a valid locale", () => {
    vi.clearAllMocks();
    const mockRequest = {
      nextUrl: {
        pathname: "/en/projects",
      },
    } as unknown as NextRequest;

    const result = proxy(mockRequest);
    expect(NextResponse.next).toHaveBeenCalled();
    expect(result).toEqual({ type: "next" });
  });

  it("should rewrite unprefixed requests to default locale (ru)", () => {
    vi.clearAllMocks();
    const mockUrl = {
      pathname: "/projects",
      clone() {
        return { ...this };
      },
    };
    const mockRequest = {
      nextUrl: mockUrl,
    } as unknown as NextRequest;

    const result = proxy(mockRequest);
    expect(NextResponse.rewrite).toHaveBeenCalled();
    expect(result).toEqual({
      type: "rewrite",
      url: {
        pathname: "/ru/projects",
        clone: expect.any(Function),
      },
    });
  });

  it("should rewrite root request to default locale (ru) without duplicating slashes", () => {
    vi.clearAllMocks();
    const mockUrl = {
      pathname: "/",
      clone() {
        return { ...this };
      },
    };
    const mockRequest = {
      nextUrl: mockUrl,
    } as unknown as NextRequest;

    const result = proxy(mockRequest);
    expect(NextResponse.rewrite).toHaveBeenCalled();
    expect(result).toEqual({
      type: "rewrite",
      url: {
        pathname: "/ru",
        clone: expect.any(Function),
      },
    });
  });
});
