package com.excel.ims.exception;

public class NoUserFoundException extends RuntimeException{

	private static final long serialVersionUID = 1L;

public NoUserFoundException (String message) {
	super(message);
}
}
